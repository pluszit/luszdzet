(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Fh={exports:{}},ya={},Uh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function hE(){if(Sm)return Re;Sm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function B(O,W,he){this.props=O,this.context=W,this.refs=$,this.updater=he||F}B.prototype.isReactComponent={},B.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function K(){}K.prototype=B.prototype;function X(O,W,he){this.props=O,this.context=W,this.refs=$,this.updater=he||F}var re=X.prototype=new K;re.constructor=X,U(re,B.prototype),re.isPureReactComponent=!0;var ce=Array.isArray,Te=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,W,he){var Ie,Se={},Pe=null,Me=null;if(W!=null)for(Ie in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(Pe=""+W.key),W)Te.call(W,Ie)&&!N.hasOwnProperty(Ie)&&(Se[Ie]=W[Ie]);var be=arguments.length-2;if(be===1)Se.children=he;else if(1<be){for(var je=Array(be),gt=0;gt<be;gt++)je[gt]=arguments[gt+2];Se.children=je}if(O&&O.defaultProps)for(Ie in be=O.defaultProps,be)Se[Ie]===void 0&&(Se[Ie]=be[Ie]);return{$$typeof:r,type:O,key:Pe,ref:Me,props:Se,_owner:ve.current}}function S(O,W){return{$$typeof:r,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return W[he]})}var L=/\/+/g;function R(O,W){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):W.toString(36)}function tt(O,W,he,Ie,Se){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Pe){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Se=Se(Me),O=Ie===""?"."+R(Me,0):Ie,ce(Se)?(he="",O!=null&&(he=O.replace(L,"$&/")+"/"),tt(Se,W,he,"",function(gt){return gt})):Se!=null&&(k(Se)&&(Se=S(Se,he+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(L,"$&/")+"/")+O)),W.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",ce(O))for(var be=0;be<O.length;be++){Pe=O[be];var je=Ie+R(Pe,be);Me+=tt(Pe,W,he,je,Se)}else if(je=A(O),typeof je=="function")for(O=je.call(O),be=0;!(Pe=O.next()).done;)Pe=Pe.value,je=Ie+R(Pe,be++),Me+=tt(Pe,W,he,je,Se);else if(Pe==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function Pt(O,W,he){if(O==null)return O;var Ie=[],Se=0;return tt(O,Ie,"","",function(Pe){return W.call(he,Pe,Se++)}),Ie}function kt(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},ee={transition:null},de={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ve};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Pt,forEach:function(O,W,he){Pt(O,function(){W.apply(this,arguments)},he)},count:function(O){var W=0;return Pt(O,function(){W++}),W},toArray:function(O){return Pt(O,function(W){return W})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=X,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=ie,Re.cloneElement=function(O,W,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=U({},O.props),Se=O.key,Pe=O.ref,Me=O._owner;if(W!=null){if(W.ref!==void 0&&(Pe=W.ref,Me=ve.current),W.key!==void 0&&(Se=""+W.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(je in W)Te.call(W,je)&&!N.hasOwnProperty(je)&&(Ie[je]=W[je]===void 0&&be!==void 0?be[je]:W[je])}var je=arguments.length-2;if(je===1)Ie.children=he;else if(1<je){be=Array(je);for(var gt=0;gt<je;gt++)be[gt]=arguments[gt+2];Ie.children=be}return{$$typeof:r,type:O.type,key:Se,ref:Pe,props:Ie,_owner:Me}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=T,Re.createFactory=function(O){var W=T.bind(null,O);return W.type=O,W},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=k,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:kt}},Re.memo=function(O,W){return{$$typeof:_,type:O,compare:W===void 0?null:W}},Re.startTransition=function(O){var W=ee.transition;ee.transition={};try{O()}finally{ee.transition=W}},Re.unstable_act=ie,Re.useCallback=function(O,W){return Ue.current.useCallback(O,W)},Re.useContext=function(O){return Ue.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Re.useEffect=function(O,W){return Ue.current.useEffect(O,W)},Re.useId=function(){return Ue.current.useId()},Re.useImperativeHandle=function(O,W,he){return Ue.current.useImperativeHandle(O,W,he)},Re.useInsertionEffect=function(O,W){return Ue.current.useInsertionEffect(O,W)},Re.useLayoutEffect=function(O,W){return Ue.current.useLayoutEffect(O,W)},Re.useMemo=function(O,W){return Ue.current.useMemo(O,W)},Re.useReducer=function(O,W,he){return Ue.current.useReducer(O,W,he)},Re.useRef=function(O){return Ue.current.useRef(O)},Re.useState=function(O){return Ue.current.useState(O)},Re.useSyncExternalStore=function(O,W,he){return Ue.current.useSyncExternalStore(O,W,he)},Re.useTransition=function(){return Ue.current.useTransition()},Re.version="18.3.1",Re}var Rm;function xd(){return Rm||(Rm=1,Uh.exports=hE()),Uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function dE(){if(Cm)return ya;Cm=1;var r=xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,C={},A=null,F=null;_!==void 0&&(A=""+_),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(F=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(C[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:e,type:f,key:A,ref:F,props:C,_owner:o.current}}return ya.Fragment=t,ya.jsx=h,ya.jsxs=h,ya}var Am;function fE(){return Am||(Am=1,Fh.exports=dE()),Fh.exports}var Be=fE(),H=xd(),cu={},zh={exports:{}},Yt={},Bh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function pE(){return Pm||(Pm=1,function(r){function e(ee,de){var ie=ee.length;ee.push(de);e:for(;0<ie;){var O=ie-1>>>1,W=ee[O];if(0<o(W,de))ee[O]=de,ee[ie]=W,ie=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ie=ee.pop();if(ie!==de){ee[0]=ie;e:for(var O=0,W=ee.length,he=W>>>1;O<he;){var Ie=2*(O+1)-1,Se=ee[Ie],Pe=Ie+1,Me=ee[Pe];if(0>o(Se,ie))Pe<W&&0>o(Me,Se)?(ee[O]=Me,ee[Pe]=ie,O=Pe):(ee[O]=Se,ee[Ie]=ie,O=Ie);else if(Pe<W&&0>o(Me,ie))ee[O]=Me,ee[Pe]=ie,O=Pe;else break e}}return de}function o(ee,de){var ie=ee.sortIndex-de.sortIndex;return ie!==0?ie:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,C=null,A=3,F=!1,U=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(ee){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=ee)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function ce(ee){if($=!1,re(ee),!U)if(t(g)!==null)U=!0,kt(Te);else{var de=t(_);de!==null&&Ue(ce,de.startTime-ee)}}function Te(ee,de){U=!1,$&&($=!1,K(T),T=-1),F=!0;var ie=A;try{for(re(de),C=t(g);C!==null&&(!(C.expirationTime>de)||ee&&!D());){var O=C.callback;if(typeof O=="function"){C.callback=null,A=C.priorityLevel;var W=O(C.expirationTime<=de);de=r.unstable_now(),typeof W=="function"?C.callback=W:C===t(g)&&s(g),re(de)}else s(g);C=t(g)}if(C!==null)var he=!0;else{var Ie=t(_);Ie!==null&&Ue(ce,Ie.startTime-de),he=!1}return he}finally{C=null,A=ie,F=!1}}var ve=!1,N=null,T=-1,S=5,k=-1;function D(){return!(r.unstable_now()-k<S)}function L(){if(N!==null){var ee=r.unstable_now();k=ee;var de=!0;try{de=N(!0,ee)}finally{de?R():(ve=!1,N=null)}}else ve=!1}var R;if(typeof X=="function")R=function(){X(L)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Pt=tt.port2;tt.port1.onmessage=L,R=function(){Pt.postMessage(null)}}else R=function(){B(L,0)};function kt(ee){N=ee,ve||(ve=!0,R())}function Ue(ee,de){T=B(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){U||F||(U=!0,kt(Te))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var de=3;break;default:de=A}var ie=A;A=de;try{return ee()}finally{A=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=A;A=ee;try{return de()}finally{A=ie}},r.unstable_scheduleCallback=function(ee,de,ie){var O=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,ee={id:w++,callback:de,priorityLevel:ee,startTime:ie,expirationTime:W,sortIndex:-1},ie>O?(ee.sortIndex=ie,e(_,ee),t(g)===null&&ee===t(_)&&($?(K(T),T=-1):$=!0,Ue(ce,ie-O))):(ee.sortIndex=W,e(g,ee),U||F||(U=!0,kt(Te))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var de=A;return function(){var ie=A;A=de;try{return ee.apply(this,arguments)}finally{A=ie}}}}(jh)),jh}var km;function mE(){return km||(km=1,Bh.exports=pE()),Bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function gE(){if(Nm)return Yt;Nm=1;var r=xd(),e=mE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function A(n){return g.call(C,n)?!0:g.call(w,n)?!1:_.test(n)?C[n]=!0:(w[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function X(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(K,X);B[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(K,X);B[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(K,X);B[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function re(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(U(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var he=!1;function Ie(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Se(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ve:return"Portal";case S:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return i=n.displayName||null,i!==null?i:Pe(n.type)||"Memo";case kt:i=n._payload,n=n._init;try{return Pe(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function gt(n){var i=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Zn(n){n._valueTracker||(n._valueTracker=gt(n))}function ts(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ar(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yi(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ns(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Io(n,i){i=i.checked,i!=null&&re(n,"checked",i,!1)}function So(n,i){Io(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?rs(n,i.type,a):i.hasOwnProperty("defaultValue")&&rs(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Qa(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rs(n,i,a){(i!=="number"||Ar(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var er=Array.isArray;function tr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ro(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function is(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(er(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function ss(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Co(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nr,Ao=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=nr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Pr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(n){vi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_i[i]=_i[n]})});function Po(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||_i.hasOwnProperty(n)&&_i[n]?(""+i).trim():i+"px"}function ko(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Po(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(n,i){if(i){if(No[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Do(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var as=null,an=null,Vn=null;function ls(n){if(n=na(n)){if(typeof as!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Rl(i),as(n.stateNode,n.type,i))}}function Mn(n){an?Vn?Vn.push(n):Vn=[n]:an=n}function Oo(){if(an){var n=an,i=Vn;if(Vn=an=null,ls(n),i)for(n=0;n<i.length;n++)ls(i[n])}}function wi(n,i){return n(i)}function Lo(){}var rr=!1;function Vo(n,i,a){if(rr)return n(i,a);rr=!0;try{return wi(n,i,a)}finally{rr=!1,(an!==null||Vn!==null)&&(Lo(),Oo())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(f)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){us=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{us=!1}function Ti(n,i,a,c,d,m,v,I,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(Q){this.onError(Q)}}var Ii=!1,cs=null,_n=!1,Mo=null,dc={onError:function(n){Ii=!0,cs=n}};function hs(n,i,a,c,d,m,v,I,P){Ii=!1,cs=null,Ti.apply(dc,arguments)}function Ya(n,i,a,c,d,m,v,I,P){if(hs.apply(this,arguments),Ii){if(Ii){var z=cs;Ii=!1,cs=null}else throw Error(t(198));_n||(_n=!0,Mo=z)}}function vn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Si(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function En(n){if(vn(n)!==n)throw Error(t(188))}function Xa(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return En(d),n;if(m===c)return En(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function bo(n){return n=Xa(n),n!==null?ds(n):null}function ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ds(n);if(i!==null)return i;n=n.sibling}return null}var fs=e.unstable_scheduleCallback,Fo=e.unstable_cancelCallback,Ja=e.unstable_shouldYield,fc=e.unstable_requestPaint,$e=e.unstable_now,Za=e.unstable_getCurrentPriorityLevel,Ri=e.unstable_ImmediatePriority,kr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,el=e.unstable_IdlePriority,Ci=null,Zt=null;function tl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ci,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:rl,zo=Math.log,nl=Math.LN2;function rl(n){return n>>>=0,n===0?32:31-(zo(n)/nl|0)|0}var ps=64,ms=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ai(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Nr(I):(m&=v,m!==0&&(c=Nr(m)))}else v=a&~d,v!==0?c=Nr(v):m!==0&&(c=Nr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ft(i),d=1<<a,c|=n[a],i&=~d;return c}function pc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Ft(m),I=1<<v,P=d[v];P===-1?(!(I&a)||I&c)&&(d[v]=pc(I,i)):P<=i&&(n.expiredLanes|=I),m&=~I}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=ps;return ps<<=1,!(ps&4194240)&&(ps=64),n}function xr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Dr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ft(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Or(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ae=0;function Lr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var il,gs,sl,ol,al,Bo=!1,bn=[],Tt=null,wn=null,Tn=null,Vr=new Map,un=new Map,Fn=[],mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Vr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(i.pointerId)}}function $t(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=na(i),i!==null&&gs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function gc(n,i,a,c,d){switch(i){case"focusin":return Tt=$t(Tt,n,i,a,c,d),!0;case"dragenter":return wn=$t(wn,n,i,a,c,d),!0;case"mouseover":return Tn=$t(Tn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Vr.set(m,$t(Vr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,un.set(m,$t(un.get(m)||null,n,i,a,c,d)),!0}return!1}function ul(n){var i=Oi(n.target);if(i!==null){var a=vn(i);if(a!==null){if(i=a.tag,i===13){if(i=Si(a),i!==null){n.blockedOn=i,al(n.priority,function(){sl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ys(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ei=c,a.target.dispatchEvent(c),Ei=null}else return i=na(a),i!==null&&gs(i),n.blockedOn=a,!1;i.shift()}return!0}function ki(n,i,a){sr(n)&&a.delete(i)}function cl(){Bo=!1,Tt!==null&&sr(Tt)&&(Tt=null),wn!==null&&sr(wn)&&(wn=null),Tn!==null&&sr(Tn)&&(Tn=null),Vr.forEach(ki),un.forEach(ki)}function In(n,i){n.blockedOn===i&&(n.blockedOn=null,Bo||(Bo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cl)))}function Sn(n){function i(d){return In(d,n)}if(0<bn.length){In(bn[0],n);for(var a=1;a<bn.length;a++){var c=bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&In(Tt,n),wn!==null&&In(wn,n),Tn!==null&&In(Tn,n),Vr.forEach(i),un.forEach(i),a=0;a<Fn.length;a++)c=Fn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Fn.length&&(a=Fn[0],a.blockedOn===null);)ul(a),a.blockedOn===null&&Fn.shift()}var or=ce.ReactCurrentBatchConfig,Mr=!0;function Ke(n,i,a,c){var d=Ae,m=or.transition;or.transition=null;try{Ae=1,jo(n,i,a,c)}finally{Ae=d,or.transition=m}}function yc(n,i,a,c){var d=Ae,m=or.transition;or.transition=null;try{Ae=4,jo(n,i,a,c)}finally{Ae=d,or.transition=m}}function jo(n,i,a,c){if(Mr){var d=ys(n,i,a,c);if(d===null)Pc(n,i,c,Ni,a),ll(n,c);else if(gc(d,n,i,a,c))c.stopPropagation();else if(ll(n,c),i&4&&-1<mc.indexOf(n)){for(;d!==null;){var m=na(d);if(m!==null&&il(m),m=ys(n,i,a,c),m===null&&Pc(n,i,c,Ni,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Pc(n,i,c,null,a)}}var Ni=null;function ys(n,i,a,c){if(Ni=null,n=os(c),n=Oi(n),n!==null)if(i=vn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Si(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ni=n,null}function $o(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Za()){case Ri:return 1;case kr:return 4;case ln:case Uo:return 16;case el:return 536870912;default:return 16}default:return 16}}var tn=null,_s=null,Ht=null;function Ho(){if(Ht)return Ht;var n,i=_s,a=i.length,c,d="value"in tn?tn.value:tn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function vs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Un(){return!0}function Wo(){return!1}function It(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Un:Wo,this.isPropagationStopped=Wo,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),i}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=It(Rn),zn=ie({},Rn,{view:0,detail:0}),_c=It(zn),ws,ar,br,xi=ie({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==br&&(br&&n.type==="mousemove"?(ws=n.screenX-br.screenX,ar=n.screenY-br.screenY):ar=ws=0,br=n),ws)},movementY:function(n){return"movementY"in n?n.movementY:ar}}),Ts=It(xi),qo=ie({},xi,{dataTransfer:0}),hl=It(qo),Is=ie({},zn,{relatedTarget:0}),Ss=It(Is),dl=ie({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=It(dl),fl=ie({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pl=It(fl),ml=ie({},Rn,{data:0}),Ko=It(ml),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=gl[n])?!!i[n]:!1}function Bn(){return yl}var u=ie({},zn,{key:function(n){if(n.key){var i=Rs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?vs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=It(u),y=ie({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),V=ie({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),j=It(V),Z=ie({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(Z),ht=ie({},xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=It(ht),yt=[9,13,27,32],ot=f&&"CompositionEvent"in window,cn=null;f&&"documentMode"in document&&(cn=document.documentMode);var nn=f&&"TextEvent"in window&&!cn,Di=f&&(!ot||cn&&8<cn&&11>=cn),Cs=" ",_f=!1;function vf(n,i){switch(n){case"keyup":return yt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function uv(n,i){switch(n){case"compositionend":return Ef(i);case"keypress":return i.which!==32?null:(_f=!0,Cs);case"textInput":return n=i.data,n===Cs&&_f?null:n;default:return null}}function cv(n,i){if(As)return n==="compositionend"||!ot&&vf(n,i)?(n=Ho(),Ht=_s=tn=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Di&&i.locale!=="ko"?null:i.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!hv[n.type]:i==="textarea"}function Tf(n,i,a,c){Mn(c),i=Tl(i,"onChange"),0<i.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Go=null,Qo=null;function dv(n){zf(n,0)}function _l(n){var i=Ds(n);if(ts(i))return n}function fv(n,i){if(n==="change")return i}var If=!1;if(f){var vc;if(f){var Ec="oninput"in document;if(!Ec){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),Ec=typeof Sf.oninput=="function"}vc=Ec}else vc=!1;If=vc&&(!document.documentMode||9<document.documentMode)}function Rf(){Go&&(Go.detachEvent("onpropertychange",Cf),Qo=Go=null)}function Cf(n){if(n.propertyName==="value"&&_l(Qo)){var i=[];Tf(i,Qo,n,os(n)),Vo(dv,i)}}function pv(n,i,a){n==="focusin"?(Rf(),Go=i,Qo=a,Go.attachEvent("onpropertychange",Cf)):n==="focusout"&&Rf()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _l(Qo)}function gv(n,i){if(n==="click")return _l(i)}function yv(n,i){if(n==="input"||n==="change")return _l(i)}function _v(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Cn=typeof Object.is=="function"?Object.is:_v;function Yo(n,i){if(Cn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Cn(n[d],i[d]))return!1}return!0}function Af(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pf(n,i){var a=Af(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Af(a)}}function kf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?kf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Nf(){for(var n=window,i=Ar();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ar(n.document)}return i}function wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vv(n){var i=Nf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&kf(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Pf(a,m);var v=Pf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ev=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,Tc=null,Xo=null,Ic=!1;function xf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Ps==null||Ps!==Ar(c)||(c=Ps,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xo&&Yo(Xo,c)||(Xo=c,c=Tl(Tc,"onSelect"),0<c.length&&(i=new Es("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function vl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ks={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Sc={},Df={};f&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function El(n){if(Sc[n])return Sc[n];if(!ks[n])return n;var i=ks[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Df)return Sc[n]=i[a];return n}var Of=El("animationend"),Lf=El("animationiteration"),Vf=El("animationstart"),Mf=El("transitionend"),bf=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){bf.set(n,i),l(i,[n])}for(var Rc=0;Rc<Ff.length;Rc++){var Cc=Ff[Rc],wv=Cc.toLowerCase(),Tv=Cc[0].toUpperCase()+Cc.slice(1);Fr(wv,"on"+Tv)}Fr(Of,"onAnimationEnd"),Fr(Lf,"onAnimationIteration"),Fr(Vf,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Mf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Uf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ya(c,i,void 0,n),n.currentTarget=null}function zf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,z=I.currentTarget;if(I=I.listener,P!==m&&d.isPropagationStopped())break e;Uf(d,I,z),m=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,z=I.currentTarget,I=I.listener,P!==m&&d.isPropagationStopped())break e;Uf(d,I,z),m=P}}}if(_n)throw n=Mo,_n=!1,Mo=null,n}function We(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(Bf(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),Bf(a,n,c,i)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[wl]){n[wl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Iv.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wl]||(i[wl]=!0,Ac("selectionchange",!1,i))}}function Bf(n,i,a,c){switch($o(i)){case 1:var d=Ke;break;case 4:d=yc;break;default:d=jo}a=d.bind(null,i,a,n),d=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Pc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Oi(I),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}I=I.parentNode}}c=c.return}Vo(function(){var z=m,Q=os(a),Y=[];e:{var G=bf.get(n);if(G!==void 0){var ne=Es,ae=n;switch(n){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":ne=p;break;case"focusin":ae="focus",ne=Ss;break;case"focusout":ae="blur",ne=Ss;break;case"beforeblur":case"afterblur":ne=Ss;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=j;break;case Of:case Lf:case Vf:ne=lr;break;case Mf:ne=Fe;break;case"scroll":ne=_c;break;case"wheel":ne=ke;break;case"copy":case"cut":case"paste":ne=pl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var le=(i&4)!==0,rt=!le&&n==="scroll",M=le?G!==null?G+"Capture":null:G;le=[];for(var x=z,b;x!==null;){b=x;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,M!==null&&(J=nt(x,M),J!=null&&le.push(ea(x,J,b)))),rt)break;x=x.return}0<le.length&&(G=new ne(G,ae,null,a,Q),Y.push({event:G,listeners:le}))}}if(!(i&7)){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Ei&&(ae=a.relatedTarget||a.fromElement)&&(Oi(ae)||ae[ur]))break e;if((ne||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=z,ae=ae?Oi(ae):null,ae!==null&&(rt=vn(ae),ae!==rt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=z),ne!==ae)){if(le=Ts,J="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,J="onPointerLeave",M="onPointerEnter",x="pointer"),rt=ne==null?G:Ds(ne),b=ae==null?G:Ds(ae),G=new le(J,x+"leave",ne,a,Q),G.target=rt,G.relatedTarget=b,J=null,Oi(Q)===z&&(le=new le(M,x+"enter",ae,a,Q),le.target=b,le.relatedTarget=rt,J=le),rt=J,ne&&ae)t:{for(le=ne,M=ae,x=0,b=le;b;b=Ns(b))x++;for(b=0,J=M;J;J=Ns(J))b++;for(;0<x-b;)le=Ns(le),x--;for(;0<b-x;)M=Ns(M),b--;for(;x--;){if(le===M||M!==null&&le===M.alternate)break t;le=Ns(le),M=Ns(M)}le=null}else le=null;ne!==null&&jf(Y,G,ne,le,!1),ae!==null&&rt!==null&&jf(Y,rt,ae,le,!0)}}e:{if(G=z?Ds(z):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var ue=fv;else if(wf(G))if(If)ue=yv;else{ue=mv;var fe=pv}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=gv);if(ue&&(ue=ue(n,z))){Tf(Y,ue,a,Q);break e}fe&&fe(n,G,z),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&rs(G,"number",G.value)}switch(fe=z?Ds(z):window,n){case"focusin":(wf(fe)||fe.contentEditable==="true")&&(Ps=fe,Tc=z,Xo=null);break;case"focusout":Xo=Tc=Ps=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,xf(Y,a,Q);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":xf(Y,a,Q)}var pe;if(ot)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else As?vf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Di&&a.locale!=="ko"&&(As||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&As&&(pe=Ho()):(tn=Q,_s="value"in tn?tn.value:tn.textContent,As=!0)),fe=Tl(z,_e),0<fe.length&&(_e=new Ko(_e,n,null,a,Q),Y.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=Ef(a),pe!==null&&(_e.data=pe)))),(pe=nn?uv(n,a):cv(n,a))&&(z=Tl(z,"onBeforeInput"),0<z.length&&(Q=new Ko("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:z}),Q.data=pe))}zf(Y,i)})}function ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Tl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(ea(n,m,d)),m=nt(n,i),m!=null&&c.push(ea(n,m,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jf(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,z=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&z!==null&&(I=z,d?(P=nt(a,m),P!=null&&v.unshift(ea(a,P,I))):d||(P=nt(a,m),P!=null&&v.push(ea(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Sv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(Sv,`
`).replace(Rv,"")}function Il(n,i,a){if(i=$f(i),$f(n)!==i&&a)throw Error(t(425))}function Sl(){}var kc=null,Nc=null;function xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(Pv)}:Dc;function Pv(n){setTimeout(function(){throw n})}function Oc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sn(i)}function Ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Wf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),jn="__reactFiber$"+xs,ta="__reactProps$"+xs,ur="__reactContainer$"+xs,Lc="__reactEvents$"+xs,kv="__reactListeners$"+xs,Nv="__reactHandles$"+xs;function Oi(n){var i=n[jn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ur]||a[jn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Wf(n);n!==null;){if(a=n[jn])return a;n=Wf(n)}return i}n=a,a=n.parentNode}return null}function na(n){return n=n[jn]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[ta]||null}var Vc=[],Os=-1;function zr(n){return{current:n}}function qe(n){0>Os||(n.current=Vc[Os],Vc[Os]=null,Os--)}function He(n,i){Os++,Vc[Os]=n.current,n.current=i}var Br={},Nt=zr(Br),Wt=zr(!1),Li=Br;function Ls(n,i){var a=n.type.contextTypes;if(!a)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Cl(){qe(Wt),qe(Nt)}function qf(n,i,a){if(Nt.current!==Br)throw Error(t(168));He(Nt,i),He(Wt,a)}function Kf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return ie({},a,c)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Li=Nt.current,He(Nt,n),He(Wt,Wt.current),!0}function Gf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kf(n,i,Li),c.__reactInternalMemoizedMergedChildContext=n,qe(Wt),qe(Nt),He(Nt,n)):qe(Wt),He(Wt,a)}var cr=null,Pl=!1,Mc=!1;function Qf(n){cr===null?cr=[n]:cr.push(n)}function xv(n){Pl=!0,Qf(n)}function jr(){if(!Mc&&cr!==null){Mc=!0;var n=0,i=Ae;try{var a=cr;for(Ae=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,Pl=!1}catch(d){throw cr!==null&&(cr=cr.slice(n+1)),fs(Ri,jr),d}finally{Ae=i,Mc=!1}}return null}var Vs=[],Ms=0,kl=null,Nl=0,hn=[],dn=0,Vi=null,hr=1,dr="";function Mi(n,i){Vs[Ms++]=Nl,Vs[Ms++]=kl,kl=n,Nl=i}function Yf(n,i,a){hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Vi,Vi=n;var c=hr;n=dr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var m=32-Ft(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,hr=1<<32-Ft(i)+d|a<<d|c,dr=m+n}else hr=1<<m|a<<d|c,dr=n}function bc(n){n.return!==null&&(Mi(n,1),Yf(n,1,0))}function Fc(n){for(;n===kl;)kl=Vs[--Ms],Vs[Ms]=null,Nl=Vs[--Ms],Vs[Ms]=null;for(;n===Vi;)Vi=hn[--dn],hn[dn]=null,dr=hn[--dn],hn[dn]=null,hr=hn[--dn],hn[dn]=null}var rn=null,sn=null,Ge=!1,An=null;function Xf(n,i){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Jf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=Ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Vi!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Ge){var i=sn;if(i){var a=i;if(!Jf(n,i)){if(Uc(n))throw Error(t(418));i=Ur(a.nextSibling);var c=rn;i&&Jf(n,i)?Xf(c,a):(n.flags=n.flags&-4097|2,Ge=!1,rn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,rn=n}}}function Zf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function xl(n){if(n!==rn)return!1;if(!Ge)return Zf(n),Ge=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!xc(n.type,n.memoizedProps)),i&&(i=sn)){if(Uc(n))throw ep(),Error(t(418));for(;i;)Xf(n,i),i=Ur(i.nextSibling)}if(Zf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){sn=Ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?Ur(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=sn;n;)n=Ur(n.nextSibling)}function bs(){sn=rn=null,Ge=!1}function Bc(n){An===null?An=[n]:An.push(n)}var Dv=ce.ReactCurrentBatchConfig;function ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Dl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function tp(n){var i=n._init;return i(n._payload)}function np(n){function i(M,x){if(n){var b=M.deletions;b===null?(M.deletions=[x],M.flags|=16):b.push(x)}}function a(M,x){if(!n)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=Yr(M,x),M.index=0,M.sibling=null,M}function m(M,x,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<x?(M.flags|=2,x):b):(M.flags|=2,x)):(M.flags|=1048576,x)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,x,b,J){return x===null||x.tag!==6?(x=Dh(b,M.mode,J),x.return=M,x):(x=d(x,b),x.return=M,x)}function P(M,x,b,J){var ue=b.type;return ue===N?Q(M,x,b.props.children,J,b.key):x!==null&&(x.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===kt&&tp(ue)===x.type)?(J=d(x,b.props),J.ref=ra(M,x,b),J.return=M,J):(J=nu(b.type,b.key,b.props,null,M.mode,J),J.ref=ra(M,x,b),J.return=M,J)}function z(M,x,b,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Oh(b,M.mode,J),x.return=M,x):(x=d(x,b.children||[]),x.return=M,x)}function Q(M,x,b,J,ue){return x===null||x.tag!==7?(x=Hi(b,M.mode,J,ue),x.return=M,x):(x=d(x,b),x.return=M,x)}function Y(M,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Dh(""+x,M.mode,b),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Te:return b=nu(x.type,x.key,x.props,null,M.mode,b),b.ref=ra(M,null,x),b.return=M,b;case ve:return x=Oh(x,M.mode,b),x.return=M,x;case kt:var J=x._init;return Y(M,J(x._payload),b)}if(er(x)||de(x))return x=Hi(x,M.mode,b,null),x.return=M,x;Dl(M,x)}return null}function G(M,x,b,J){var ue=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ue!==null?null:I(M,x,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Te:return b.key===ue?P(M,x,b,J):null;case ve:return b.key===ue?z(M,x,b,J):null;case kt:return ue=b._init,G(M,x,ue(b._payload),J)}if(er(b)||de(b))return ue!==null?null:Q(M,x,b,J,null);Dl(M,b)}return null}function ne(M,x,b,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(b)||null,I(x,M,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Te:return M=M.get(J.key===null?b:J.key)||null,P(x,M,J,ue);case ve:return M=M.get(J.key===null?b:J.key)||null,z(x,M,J,ue);case kt:var fe=J._init;return ne(M,x,b,fe(J._payload),ue)}if(er(J)||de(J))return M=M.get(b)||null,Q(x,M,J,ue,null);Dl(x,J)}return null}function ae(M,x,b,J){for(var ue=null,fe=null,pe=x,_e=x=0,Et=null;pe!==null&&_e<b.length;_e++){pe.index>_e?(Et=pe,pe=null):Et=pe.sibling;var Ve=G(M,pe,b[_e],J);if(Ve===null){pe===null&&(pe=Et);break}n&&pe&&Ve.alternate===null&&i(M,pe),x=m(Ve,x,_e),fe===null?ue=Ve:fe.sibling=Ve,fe=Ve,pe=Et}if(_e===b.length)return a(M,pe),Ge&&Mi(M,_e),ue;if(pe===null){for(;_e<b.length;_e++)pe=Y(M,b[_e],J),pe!==null&&(x=m(pe,x,_e),fe===null?ue=pe:fe.sibling=pe,fe=pe);return Ge&&Mi(M,_e),ue}for(pe=c(M,pe);_e<b.length;_e++)Et=ne(pe,M,_e,b[_e],J),Et!==null&&(n&&Et.alternate!==null&&pe.delete(Et.key===null?_e:Et.key),x=m(Et,x,_e),fe===null?ue=Et:fe.sibling=Et,fe=Et);return n&&pe.forEach(function(Xr){return i(M,Xr)}),Ge&&Mi(M,_e),ue}function le(M,x,b,J){var ue=de(b);if(typeof ue!="function")throw Error(t(150));if(b=ue.call(b),b==null)throw Error(t(151));for(var fe=ue=null,pe=x,_e=x=0,Et=null,Ve=b.next();pe!==null&&!Ve.done;_e++,Ve=b.next()){pe.index>_e?(Et=pe,pe=null):Et=pe.sibling;var Xr=G(M,pe,Ve.value,J);if(Xr===null){pe===null&&(pe=Et);break}n&&pe&&Xr.alternate===null&&i(M,pe),x=m(Xr,x,_e),fe===null?ue=Xr:fe.sibling=Xr,fe=Xr,pe=Et}if(Ve.done)return a(M,pe),Ge&&Mi(M,_e),ue;if(pe===null){for(;!Ve.done;_e++,Ve=b.next())Ve=Y(M,Ve.value,J),Ve!==null&&(x=m(Ve,x,_e),fe===null?ue=Ve:fe.sibling=Ve,fe=Ve);return Ge&&Mi(M,_e),ue}for(pe=c(M,pe);!Ve.done;_e++,Ve=b.next())Ve=ne(pe,M,_e,Ve.value,J),Ve!==null&&(n&&Ve.alternate!==null&&pe.delete(Ve.key===null?_e:Ve.key),x=m(Ve,x,_e),fe===null?ue=Ve:fe.sibling=Ve,fe=Ve);return n&&pe.forEach(function(cE){return i(M,cE)}),Ge&&Mi(M,_e),ue}function rt(M,x,b,J){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Te:e:{for(var ue=b.key,fe=x;fe!==null;){if(fe.key===ue){if(ue=b.type,ue===N){if(fe.tag===7){a(M,fe.sibling),x=d(fe,b.props.children),x.return=M,M=x;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===kt&&tp(ue)===fe.type){a(M,fe.sibling),x=d(fe,b.props),x.ref=ra(M,fe,b),x.return=M,M=x;break e}a(M,fe);break}else i(M,fe);fe=fe.sibling}b.type===N?(x=Hi(b.props.children,M.mode,J,b.key),x.return=M,M=x):(J=nu(b.type,b.key,b.props,null,M.mode,J),J.ref=ra(M,x,b),J.return=M,M=J)}return v(M);case ve:e:{for(fe=b.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){a(M,x.sibling),x=d(x,b.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else i(M,x);x=x.sibling}x=Oh(b,M.mode,J),x.return=M,M=x}return v(M);case kt:return fe=b._init,rt(M,x,fe(b._payload),J)}if(er(b))return ae(M,x,b,J);if(de(b))return le(M,x,b,J);Dl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(a(M,x.sibling),x=d(x,b),x.return=M,M=x):(a(M,x),x=Dh(b,M.mode,J),x.return=M,M=x),v(M)):a(M,x)}return rt}var Fs=np(!0),rp=np(!1),Ol=zr(null),Ll=null,Us=null,jc=null;function $c(){jc=Us=Ll=null}function Hc(n){var i=Ol.current;qe(Ol),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function zs(n,i){Ll=n,jc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Kt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Us===null){if(Ll===null)throw Error(t(308));Us=n,Ll.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return i}var bi=null;function qc(n){bi===null?bi=[n]:bi.push(n)}function ip(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,qc(i)):(a.next=d.next,d.next=a),i.interleaved=a,fr(n,c)}function fr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function Kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,fr(n,a)}return d=c.interleaved,d===null?(i.next=i,qc(c)):(i.next=d.next,d.next=i),c.interleaved=i,fr(n,a)}function Vl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Or(n,a)}}function op(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ml(n,i,a,c){var d=n.updateQueue;$r=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,z=P.next;P.next=null,v===null?m=z:v.next=z,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,I=Q.lastBaseUpdate,I!==v&&(I===null?Q.firstBaseUpdate=z:I.next=z,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;v=0,Q=z=P=null,I=m;do{var G=I.lane,ne=I.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,le=I;switch(G=i,ne=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(ne,Y,G);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,G=typeof ae=="function"?ae.call(ne,Y,G):ae,G==null)break e;Y=ie({},Y,G);break e;case 2:$r=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else ne={eventTime:ne,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Q===null?(z=Q=ne,P=Y):Q=Q.next=ne,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);zi|=v,n.lanes=v,n.memoizedState=Y}}function ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},$n=zr(ia),sa=zr(ia),oa=zr(ia);function Fi(n){if(n===ia)throw Error(t(174));return n}function Gc(n,i){switch(He(oa,i),He(sa,n),He($n,ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}qe($n),He($n,i)}function Bs(){qe($n),qe(sa),qe(oa)}function lp(n){Fi(oa.current);var i=Fi($n.current),a=ct(i,n.type);i!==a&&(He(sa,n),He($n,a))}function Qc(n){sa.current===n&&(qe($n),qe(sa))}var Ye=zr(0);function bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yc=[];function Xc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var Fl=ce.ReactCurrentDispatcher,Jc=ce.ReactCurrentBatchConfig,Ui=0,Xe=null,dt=null,_t=null,Ul=!1,aa=!1,la=0,Ov=0;function xt(){throw Error(t(321))}function Zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Cn(n[a],i[a]))return!1;return!0}function eh(n,i,a,c,d,m){if(Ui=m,Xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fl.current=n===null||n.memoizedState===null?bv:Fv,n=a(c,d),aa){m=0;do{if(aa=!1,la=0,25<=m)throw Error(t(301));m+=1,_t=dt=null,i.updateQueue=null,Fl.current=Uv,n=a(c,d)}while(aa)}if(Fl.current=jl,i=dt!==null&&dt.next!==null,Ui=0,_t=dt=Xe=null,Ul=!1,i)throw Error(t(300));return n}function th(){var n=la!==0;return la=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=n:_t=_t.next=n,_t}function pn(){if(dt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=_t===null?Xe.memoizedState:_t.next;if(i!==null)_t=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Xe.memoizedState=_t=n:_t=_t.next=n}return _t}function ua(n,i){return typeof i=="function"?i(n):i}function nh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,P=null,z=m;do{var Q=z.lane;if((Ui&Q)===Q)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var Y={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(I=P=Y,v=c):P=P.next=Y,Xe.lanes|=Q,zi|=Q}z=z.next}while(z!==null&&z!==m);P===null?v=c:P.next=I,Cn(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Xe.lanes|=m,zi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function rh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Cn(m,i.memoizedState)||(Kt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function up(){}function cp(n,i){var a=Xe,c=pn(),d=i(),m=!Cn(c.memoizedState,d);if(m&&(c.memoizedState=d,Kt=!0),c=c.queue,ih(fp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ca(9,dp.bind(null,a,c,d,i),void 0,null),vt===null)throw Error(t(349));Ui&30||hp(a,i,d)}return d}function hp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xe.updateQueue,i===null?(i={lastEffect:null,stores:null},Xe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function dp(n,i,a,c){i.value=a,i.getSnapshot=c,pp(i)&&mp(n)}function fp(n,i,a){return a(function(){pp(i)&&mp(n)})}function pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Cn(n,a)}catch{return!0}}function mp(n){var i=fr(n,1);i!==null&&xn(i,n,1,-1)}function gp(n){var i=Hn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},i.queue=n,n=n.dispatch=Mv.bind(null,Xe,n),[i.memoizedState,n]}function ca(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Xe.updateQueue,i===null?(i={lastEffect:null,stores:null},Xe.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return pn().memoizedState}function zl(n,i,a,c){var d=Hn();Xe.flags|=n,d.memoizedState=ca(1|i,a,void 0,c===void 0?null:c)}function Bl(n,i,a,c){var d=pn();c=c===void 0?null:c;var m=void 0;if(dt!==null){var v=dt.memoizedState;if(m=v.destroy,c!==null&&Zc(c,v.deps)){d.memoizedState=ca(i,a,m,c);return}}Xe.flags|=n,d.memoizedState=ca(1|i,a,m,c)}function _p(n,i){return zl(8390656,8,n,i)}function ih(n,i){return Bl(2048,8,n,i)}function vp(n,i){return Bl(4,2,n,i)}function Ep(n,i){return Bl(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Tp(n,i,a){return a=a!=null?a.concat([n]):null,Bl(4,4,wp.bind(null,i,n),a)}function sh(){}function Ip(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Sp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Rp(n,i,a){return Ui&21?(Cn(a,i)||(a=Pi(),Xe.lanes|=a,zi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a)}function Lv(n,i){var a=Ae;Ae=a!==0&&4>a?a:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),i()}finally{Ae=a,Jc.transition=c}}function Cp(){return pn().memoizedState}function Vv(n,i,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ap(n))Pp(i,a);else if(a=ip(n,i,a,c),a!==null){var d=Bt();xn(a,n,c,d),kp(a,i,c)}}function Mv(n,i,a){var c=Gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Pp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,Cn(I,v)){var P=i.interleaved;P===null?(d.next=d,qc(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=ip(n,i,d,c),a!==null&&(d=Bt(),xn(a,n,c,d),kp(a,i,c))}}function Ap(n){var i=n.alternate;return n===Xe||i!==null&&i===Xe}function Pp(n,i){aa=Ul=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function kp(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Or(n,a)}}var jl={readContext:fn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},bv={readContext:fn,useCallback:function(n,i){return Hn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:_p,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,zl(4194308,4,wp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return zl(4194308,4,n,i)},useInsertionEffect:function(n,i){return zl(4,2,n,i)},useMemo:function(n,i){var a=Hn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Hn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Vv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var i=Hn();return n={current:n},i.memoizedState=n},useState:gp,useDebugValue:sh,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=gp(!1),i=n[0];return n=Lv.bind(null,n[1]),Hn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Xe,d=Hn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),vt===null)throw Error(t(349));Ui&30||hp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,_p(fp.bind(null,c,m,n),[n]),c.flags|=2048,ca(9,dp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Hn(),i=vt.identifierPrefix;if(Ge){var a=dr,c=hr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=la++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ov++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Fv={readContext:fn,useCallback:Ip,useContext:fn,useEffect:ih,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:Sp,useReducer:nh,useRef:yp,useState:function(){return nh(ua)},useDebugValue:sh,useDeferredValue:function(n){var i=pn();return Rp(i,dt.memoizedState,n)},useTransition:function(){var n=nh(ua)[0],i=pn().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1},Uv={readContext:fn,useCallback:Ip,useContext:fn,useEffect:ih,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:Sp,useReducer:rh,useRef:yp,useState:function(){return rh(ua)},useDebugValue:sh,useDeferredValue:function(n){var i=pn();return dt===null?i.memoizedState=n:Rp(i,dt.memoizedState,n)},useTransition:function(){var n=rh(ua)[0],i=pn().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function oh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var $l={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=Gr(n),m=pr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Hr(n,m,d),i!==null&&(xn(i,n,d,c),Vl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=Gr(n),m=pr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Hr(n,m,d),i!==null&&(xn(i,n,d,c),Vl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Bt(),c=Gr(n),d=pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Hr(n,d,c),i!==null&&(xn(i,n,c,a),Vl(i,n,c))}};function Np(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,c)||!Yo(d,m):!0}function xp(n,i,a){var c=!1,d=Br,m=i.contextType;return typeof m=="object"&&m!==null?m=fn(m):(d=qt(i)?Li:Nt.current,c=i.contextTypes,m=(c=c!=null)?Ls(n,d):Br),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$l,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Dp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&$l.enqueueReplaceState(i,i.state,null)}function ah(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Kc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=fn(m):(m=qt(i)?Li:Nt.current,d.context=Ls(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(oh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$l.enqueueReplaceState(d,d.state,null),Ml(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function lh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Op(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Yl||(Yl=!0,Sh=c),uh(n,i)},a}function Lp(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){uh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uh(n,i),typeof c!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new zv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=eE.bind(null,n,i,a),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function bp(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n)}var Bv=ce.ReactCurrentOwner,Kt=!1;function zt(n,i,a,c){i.child=n===null?rp(i,null,a,c):Fs(i,n.child,a,c)}function Fp(n,i,a,c,d){a=a.render;var m=i.ref;return zs(i,d),c=eh(n,i,a,c,m,d),a=th(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(Ge&&a&&bc(i),i.flags|=1,zt(n,i,c,d),i.child)}function Up(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!xh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,zp(n,i,m,c,d)):(n=nu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(v,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Yr(m,c),n.ref=i.ref,n.return=i,i.child=n}function zp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Yo(m,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Kt=!0);else return i.lanes=n.lanes,mr(n,i,d)}return ch(n,i,a,c,d)}function Bp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Hs,on),on|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(Hs,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(Hs,on),on|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,He(Hs,on),on|=c;return zt(n,i,d,a),i.child}function jp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ch(n,i,a,c,d){var m=qt(a)?Li:Nt.current;return m=Ls(i,m),zs(i,d),a=eh(n,i,a,c,m,d),c=th(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(Ge&&c&&bc(i),i.flags|=1,zt(n,i,a,d),i.child)}function $p(n,i,a,c,d){if(qt(a)){var m=!0;Al(i)}else m=!1;if(zs(i,d),i.stateNode===null)Wl(n,i),xp(i,a,c),ah(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=fn(z):(z=qt(a)?Li:Nt.current,z=Ls(i,z));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==z)&&Dp(i,v,c,z),$r=!1;var G=i.memoizedState;v.state=G,Ml(i,c,v,d),P=i.memoizedState,I!==c||G!==P||Wt.current||$r?(typeof Q=="function"&&(oh(i,a,Q,c),P=i.memoizedState),(I=$r||Np(i,a,I,c,G,P,z))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=z,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,sp(n,i),I=i.memoizedProps,z=i.type===i.elementType?I:Pn(i.type,I),v.props=z,Y=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=qt(a)?Li:Nt.current,P=Ls(i,P));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||G!==P)&&Dp(i,v,c,P),$r=!1,G=i.memoizedState,v.state=G,Ml(i,c,v,d);var ae=i.memoizedState;I!==Y||G!==ae||Wt.current||$r?(typeof ne=="function"&&(oh(i,a,ne,c),ae=i.memoizedState),(z=$r||Np(i,a,z,c,G,ae,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return hh(n,i,a,c,m,d)}function hh(n,i,a,c,d,m){jp(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Gf(i,a,!1),mr(n,i,m);c=i.stateNode,Bv.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Fs(i,n.child,null,m),i.child=Fs(i,null,I,m)):zt(n,i,I,m),i.memoizedState=c.state,d&&Gf(i,a,!0),i.child}function Hp(n){var i=n.stateNode;i.pendingContext?qf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qf(n,i.context,!1),Gc(n,i.containerInfo)}function Wp(n,i,a,c,d){return bs(),Bc(d),i.flags|=256,zt(n,i,a,c),i.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function fh(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,a){var c=i.pendingProps,d=Ye.current,m=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ye,d&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=ru(v,c,0,null),n=Hi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=fh(a),i.memoizedState=dh,n):ph(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return jv(n,i,v,c,I,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=Yr(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Yr(I,m):(m=Hi(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?fh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=dh,c}return m=n.child,n=m.sibling,c=Yr(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ph(n,i){return i=ru({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Hl(n,i,a,c){return c!==null&&Bc(c),Fs(i,n.child,null,a),n=ph(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function jv(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=lh(Error(t(422))),Hl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ru({mode:"visible",children:c.children},d,0,null),m=Hi(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&Fs(i,n.child,null,v),i.child.memoizedState=fh(v),i.memoizedState=dh,m);if(!(i.mode&1))return Hl(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=lh(m,c,void 0),Hl(n,i,v,c)}if(I=(v&n.childLanes)!==0,Kt||I){if(c=vt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,fr(n,d),xn(c,n,d,-1))}return Nh(),c=lh(Error(t(421))),Hl(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=tE.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,sn=Ur(d.nextSibling),rn=i,Ge=!0,An=null,n!==null&&(hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Vi,hr=n.id,dr=n.overflow,Vi=i),i=ph(i,c.children),i.flags|=4096,i)}function Kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function mh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Gp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(zt(n,i,c.children,a),c=Ye.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,i);else if(n.tag===19)Kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ye,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}mh(i,!0,a,null,m);break;case"together":mh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function $v(n,i,a){switch(i.tag){case 3:Hp(i),bs();break;case 5:lp(i);break;case 1:qt(i.type)&&Al(i);break;case 4:Gc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Ol,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Ye,Ye.current&1),i.flags|=128,null):a&i.child.childLanes?qp(n,i,a):(He(Ye,Ye.current&1),n=mr(n,i,a),n!==null?n.sibling:null);He(Ye,Ye.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Gp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ye,Ye.current),c)break;return null;case 22:case 23:return i.lanes=0,Bp(n,i,a)}return mr(n,i,a)}var Qp,gh,Yp,Xp;Qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gh=function(){},Yp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Fi($n.current);var m=null;switch(a){case"input":d=yi(n,d),c=yi(n,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=Ro(n,d),c=Ro(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Sl)}xo(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var I=d[z];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var P=c[z];if(I=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==I&&(P!=null||I!=null))if(z==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(m=m||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",n),m||I===P||(m=[])):(m=m||[]).push(z,P))}a&&(m=m||[]).push("style",a);var z=m;(i.updateQueue=z)&&(i.flags|=4)}},Xp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ha(n,i){if(!Ge)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Hv(n,i,a){var c=i.pendingProps;switch(Fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(i),null;case 1:return qt(i.type)&&Cl(),Dt(i),null;case 3:return c=i.stateNode,Bs(),qe(Wt),qe(Nt),Xc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,An!==null&&(Ah(An),An=null))),gh(n,i),Dt(i),null;case 5:Qc(i);var d=Fi(oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Yp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dt(i),null}if(n=Fi($n.current),xl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[jn]=i,c[ta]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ns(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":is(c,m),We("invalid",c)}xo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Il(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Il(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":Zn(c),Qa(c,m,!0);break;case"textarea":Zn(c),Co(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Sl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[jn]=i,n[ta]=c,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(v=Do(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ns(n,c),d=yi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),We("invalid",n);break;case"textarea":is(n,c),d=Ro(n,c),We("invalid",n);break;default:d=c}xo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var P=I[m];m==="style"?ko(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ao(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Pr(n,P):typeof P=="number"&&Pr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&We("scroll",n):P!=null&&re(n,m,P,v))}switch(a){case"input":Zn(n),Qa(n,c,!1);break;case"textarea":Zn(n),Co(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?tr(n,!!c.multiple,m,!1):c.defaultValue!=null&&tr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Sl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dt(i),null;case 6:if(n&&i.stateNode!=null)Xp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fi(oa.current),Fi($n.current),xl(i)){if(c=i.stateNode,a=i.memoizedProps,c[jn]=i,(m=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Il(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Il(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[jn]=i,i.stateNode=c}return Dt(i),null;case 13:if(qe(Ye),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&i.mode&1&&!(i.flags&128))ep(),bs(),i.flags|=98560,m=!1;else if(m=xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[jn]=i}else bs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Dt(i),m=!1}else An!==null&&(Ah(An),An=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Ye.current&1?ft===0&&(ft=3):Nh())),i.updateQueue!==null&&(i.flags|=4),Dt(i),null);case 4:return Bs(),gh(n,i),n===null&&Zo(i.stateNode.containerInfo),Dt(i),null;case 10:return Hc(i.type._context),Dt(i),null;case 17:return qt(i.type)&&Cl(),Dt(i),null;case 19:if(qe(Ye),m=i.memoizedState,m===null)return Dt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)ha(m,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=bl(n),v!==null){for(i.flags|=128,ha(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ye,Ye.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>Ws&&(i.flags|=128,c=!0,ha(m,!1),i.lanes=4194304)}else{if(!c)if(n=bl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ha(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ge)return Dt(i),null}else 2*$e()-m.renderingStartTime>Ws&&a!==1073741824&&(i.flags|=128,c=!0,ha(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Ye.current,He(Ye,c?a&1|2:a&1),i):(Dt(i),null);case 22:case 23:return kh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?on&1073741824&&(Dt(i),i.subtreeFlags&6&&(i.flags|=8192)):Dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Wv(n,i){switch(Fc(i),i.tag){case 1:return qt(i.type)&&Cl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Bs(),qe(Wt),qe(Nt),Xc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Qc(i),null;case 13:if(qe(Ye),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qe(Ye),null;case 4:return Bs(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var ql=!1,Ot=!1,qv=typeof WeakSet=="function"?WeakSet:Set,oe=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,i,c)}else a.current=null}function yh(n,i,a){try{a()}catch(c){Ze(n,i,c)}}var Jp=!1;function Kv(n,i){if(kc=Mr,n=Nf(),wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,z=0,Q=0,Y=n,G=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==m||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)G=Y,Y=ne;for(;;){if(Y===n)break t;if(G===a&&++z===d&&(I=v),G===m&&++Q===c&&(P=v),(ne=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ne}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:n,selectionRange:a},Mr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,rt=ae.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?le:Pn(i.type,le),rt);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){Ze(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=Jp,Jp=!1,ae}function da(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&yh(i,a,m)}d=d.next}while(d!==c)}}function Kl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function _h(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Zp(n){var i=n.alternate;i!==null&&(n.alternate=null,Zp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[jn],delete i[ta],delete i[Lc],delete i[kv],delete i[Nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Sl));else if(c!==4&&(n=n.child,n!==null))for(vh(n,i,a),n=n.sibling;n!==null;)vh(n,i,a),n=n.sibling}function Eh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eh(n,i,a),n=n.sibling;n!==null;)Eh(n,i,a),n=n.sibling}var St=null,kn=!1;function Wr(n,i,a){for(a=a.child;a!==null;)nm(n,i,a),a=a.sibling}function nm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ci,a)}catch{}switch(a.tag){case 5:Ot||$s(a,i);case 6:var c=St,d=kn;St=null,Wr(n,i,a),St=c,kn=d,St!==null&&(kn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(kn?(n=St,a=a.stateNode,n.nodeType===8?Oc(n.parentNode,a):n.nodeType===1&&Oc(n,a),Sn(n)):Oc(St,a.stateNode));break;case 4:c=St,d=kn,St=a.stateNode.containerInfo,kn=!0,Wr(n,i,a),St=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&yh(a,i,v),d=d.next}while(d!==c)}Wr(n,i,a);break;case 1:if(!Ot&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,i,I)}Wr(n,i,a);break;case 21:Wr(n,i,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Wr(n,i,a),Ot=c):Wr(n,i,a);break;default:Wr(n,i,a)}}function rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new qv),i.forEach(function(c){var d=nE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:St=I.stateNode,kn=!1;break e;case 3:St=I.stateNode.containerInfo,kn=!0;break e;case 4:St=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(St===null)throw Error(t(160));nm(m,v,d),St=null,kn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){Ze(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)im(i,n),i=i.sibling}function im(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(i,n),Wn(n),c&4){try{da(3,n,n.return),Kl(3,n)}catch(le){Ze(n,n.return,le)}try{da(5,n,n.return)}catch(le){Ze(n,n.return,le)}}break;case 1:Nn(i,n),Wn(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Nn(i,n),Wn(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Pr(d,"")}catch(le){Ze(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Io(d,m),Do(I,v);var z=Do(I,m);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?ko(d,Y):Q==="dangerouslySetInnerHTML"?Ao(d,Y):Q==="children"?Pr(d,Y):re(d,Q,Y,z)}switch(I){case"input":So(d,m);break;case"textarea":ss(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?tr(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?tr(d,!!m.multiple,m.defaultValue,!0):tr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ta]=m}catch(le){Ze(n,n.return,le)}}break;case 6:if(Nn(i,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){Ze(n,n.return,le)}}break;case 3:if(Nn(i,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sn(i.containerInfo)}catch(le){Ze(n,n.return,le)}break;case 4:Nn(i,n),Wn(n);break;case 13:Nn(i,n),Wn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ih=$e())),c&4&&rm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(z=Ot)||Q,Nn(i,n),Ot=z):Nn(i,n),Wn(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Q&&n.mode&1)for(oe=n,Q=n.child;Q!==null;){for(Y=oe=Q;oe!==null;){switch(G=oe,ne=G.child,G.tag){case 0:case 11:case 14:case 15:da(4,G,G.return);break;case 1:$s(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){Ze(c,a,le)}}break;case 5:$s(G,G.return);break;case 22:if(G.memoizedState!==null){am(Y);continue}}ne!==null?(ne.return=G,oe=ne):am(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Po("display",v))}catch(le){Ze(n,n.return,le)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=z?"":Y.memoizedProps}catch(le){Ze(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Nn(i,n),Wn(n),c&4&&rm(n);break;case 21:break;default:Nn(i,n),Wn(n)}}function Wn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pr(d,""),c.flags&=-33);var m=tm(n);Eh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=tm(n);vh(n,I,v);break;default:throw Error(t(161))}}catch(P){Ze(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gv(n,i,a){oe=n,sm(n)}function sm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ql;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Ot;I=ql;var z=Ot;if(ql=v,(Ot=P)&&!z)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?lm(d):P!==null?(P.return=v,oe=P):lm(d);for(;m!==null;)oe=m,sm(m),m=m.sibling;oe=d,ql=I,Ot=z}om(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,oe=m):om(n)}}function om(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Ot||Kl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ap(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ap(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Sn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||i.flags&512&&_h(i)}catch(G){Ze(i,i.return,G)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function am(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function lm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Kl(4,i)}catch(P){Ze(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){Ze(i,d,P)}}var m=i.return;try{_h(i)}catch(P){Ze(i,m,P)}break;case 5:var v=i.return;try{_h(i)}catch(P){Ze(i,v,P)}}}catch(P){Ze(i,i.return,P)}if(i===n){oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,oe=I;break}oe=i.return}}var Qv=Math.ceil,Gl=ce.ReactCurrentDispatcher,wh=ce.ReactCurrentOwner,mn=ce.ReactCurrentBatchConfig,Oe=0,vt=null,at=null,Rt=0,on=0,Hs=zr(0),ft=0,fa=null,zi=0,Ql=0,Th=0,pa=null,Gt=null,Ih=0,Ws=1/0,gr=null,Yl=!1,Sh=null,qr=null,Xl=!1,Kr=null,Jl=0,ma=0,Rh=null,Zl=-1,eu=0;function Bt(){return Oe&6?$e():Zl!==-1?Zl:Zl=$e()}function Gr(n){return n.mode&1?Oe&2&&Rt!==0?Rt&-Rt:Dv.transition!==null?(eu===0&&(eu=Pi()),eu):(n=Ae,n!==0||(n=window.event,n=n===void 0?16:$o(n.type)),n):1}function xn(n,i,a,c){if(50<ma)throw ma=0,Rh=null,Error(t(185));Dr(n,a,c),(!(Oe&2)||n!==vt)&&(n===vt&&(!(Oe&2)&&(Ql|=a),ft===4&&Qr(n,Rt)),Qt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(Ws=$e()+500,Pl&&jr()))}function Qt(n,i){var a=n.callbackNode;ir(n,i);var c=Ai(n,n===vt?Rt:0);if(c===0)a!==null&&Fo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Fo(a),i===1)n.tag===0?xv(cm.bind(null,n)):Qf(cm.bind(null,n)),Av(function(){!(Oe&6)&&jr()}),a=null;else{switch(Lr(c)){case 1:a=Ri;break;case 4:a=kr;break;case 16:a=ln;break;case 536870912:a=el;break;default:a=ln}a=_m(a,um.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function um(n,i){if(Zl=-1,eu=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(qs()&&n.callbackNode!==a)return null;var c=Ai(n,n===vt?Rt:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=tu(n,c);else{i=c;var d=Oe;Oe|=2;var m=dm();(vt!==n||Rt!==i)&&(gr=null,Ws=$e()+500,ji(n,i));do try{Jv();break}catch(I){hm(n,I)}while(!0);$c(),Gl.current=m,Oe=d,at!==null?i=0:(vt=null,Rt=0,i=ft)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(c=d,i=Ch(n,d))),i===1)throw a=fa,ji(n,0),Qr(n,c),Qt(n,$e()),a;if(i===6)Qr(n,c);else{if(d=n.current.alternate,!(c&30)&&!Yv(d)&&(i=tu(n,c),i===2&&(m=en(n),m!==0&&(c=m,i=Ch(n,m))),i===1))throw a=fa,ji(n,0),Qr(n,c),Qt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:$i(n,Gt,gr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(i=Ih+500-$e(),10<i)){if(Ai(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc($i.bind(null,n,Gt,gr),i);break}$i(n,Gt,gr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Ft(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qv(c/1960))-c,10<c){n.timeoutHandle=Dc($i.bind(null,n,Gt,gr),c);break}$i(n,Gt,gr);break;case 5:$i(n,Gt,gr);break;default:throw Error(t(329))}}}return Qt(n,$e()),n.callbackNode===a?um.bind(null,n):null}function Ch(n,i){var a=pa;return n.current.memoizedState.isDehydrated&&(ji(n,i).flags|=256),n=tu(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Ah(i)),n}function Ah(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function Yv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Cn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qr(n,i){for(i&=~Th,i&=~Ql,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ft(i),c=1<<a;n[a]=-1,i&=~c}}function cm(n){if(Oe&6)throw Error(t(327));qs();var i=Ai(n,0);if(!(i&1))return Qt(n,$e()),null;var a=tu(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Ch(n,c))}if(a===1)throw a=fa,ji(n,0),Qr(n,i),Qt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$i(n,Gt,gr),Qt(n,$e()),null}function Ph(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(Ws=$e()+500,Pl&&jr())}}function Bi(n){Kr!==null&&Kr.tag===0&&!(Oe&6)&&qs();var i=Oe;Oe|=1;var a=mn.transition,c=Ae;try{if(mn.transition=null,Ae=1,n)return n()}finally{Ae=c,mn.transition=a,Oe=i,!(Oe&6)&&jr()}}function kh(){on=Hs.current,qe(Hs)}function ji(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Cv(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Bs(),qe(Wt),qe(Nt),Xc();break;case 5:Qc(c);break;case 4:Bs();break;case 13:qe(Ye);break;case 19:qe(Ye);break;case 10:Hc(c.type._context);break;case 22:case 23:kh()}a=a.return}if(vt=n,at=n=Yr(n.current,null),Rt=on=i,ft=0,fa=null,Th=Ql=zi=0,Gt=pa=null,bi!==null){for(i=0;i<bi.length;i++)if(a=bi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}bi=null}return n}function hm(n,i){do{var a=at;try{if($c(),Fl.current=jl,Ul){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ul=!1}if(Ui=0,_t=dt=Xe=null,aa=!1,la=0,wh.current=null,a===null||a.return===null){ft=1,fa=i,at=null;break}e:{var m=n,v=a.return,I=a,P=i;if(i=Rt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Q=I,Y=Q.tag;if(!(Q.mode&1)&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=Mp(v);if(ne!==null){ne.flags&=-257,bp(ne,v,I,m,i),ne.mode&1&&Vp(m,z,i),i=ne,P=z;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(P),i.updateQueue=le}else ae.add(P);break e}else{if(!(i&1)){Vp(m,z,i),Nh();break e}P=Error(t(426))}}else if(Ge&&I.mode&1){var rt=Mp(v);if(rt!==null){!(rt.flags&65536)&&(rt.flags|=256),bp(rt,v,I,m,i),Bc(js(P,I));break e}}m=P=js(P,I),ft!==4&&(ft=2),pa===null?pa=[m]:pa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=Op(m,P,i);op(m,M);break e;case 1:I=P;var x=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(qr===null||!qr.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var J=Lp(m,I,i);op(m,J);break e}}m=m.return}while(m!==null)}pm(a)}catch(ue){i=ue,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function dm(){var n=Gl.current;return Gl.current=jl,n===null?jl:n}function Nh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(zi&268435455)&&!(Ql&268435455)||Qr(vt,Rt)}function tu(n,i){var a=Oe;Oe|=2;var c=dm();(vt!==n||Rt!==i)&&(gr=null,ji(n,i));do try{Xv();break}catch(d){hm(n,d)}while(!0);if($c(),Oe=a,Gl.current=c,at!==null)throw Error(t(261));return vt=null,Rt=0,ft}function Xv(){for(;at!==null;)fm(at)}function Jv(){for(;at!==null&&!Ja();)fm(at)}function fm(n){var i=ym(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?pm(n):at=i,wh.current=null}function pm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Wv(a,i),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}else if(a=Hv(a,i,on),a!==null){at=a;return}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);ft===0&&(ft=5)}function $i(n,i,a){var c=Ae,d=mn.transition;try{mn.transition=null,Ae=1,Zv(n,i,a,c)}finally{mn.transition=d,Ae=c}return null}function Zv(n,i,a,c){do qs();while(Kr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===vt&&(at=vt=null,Rt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Xl||(Xl=!0,_m(ln,function(){return qs(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=mn.transition,mn.transition=null;var v=Ae;Ae=1;var I=Oe;Oe|=4,wh.current=null,Kv(n,a),im(a,n),vv(Nc),Mr=!!kc,Nc=kc=null,n.current=a,Gv(a),fc(),Oe=I,Ae=v,mn.transition=m}else n.current=a;if(Xl&&(Xl=!1,Kr=n,Jl=d),m=n.pendingLanes,m===0&&(qr=null),tl(a.stateNode),Qt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Yl)throw Yl=!1,n=Sh,Sh=null,n;return Jl&1&&n.tag!==0&&qs(),m=n.pendingLanes,m&1?n===Rh?ma++:(ma=0,Rh=n):ma=0,jr(),null}function qs(){if(Kr!==null){var n=Lr(Jl),i=mn.transition,a=Ae;try{if(mn.transition=null,Ae=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Jl=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,oe=n.current;oe!==null;){var m=oe,v=m.child;if(oe.flags&16){var I=m.deletions;if(I!==null){for(var P=0;P<I.length;P++){var z=I[P];for(oe=z;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:da(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,oe=Y;else for(;oe!==null;){Q=oe;var G=Q.sibling,ne=Q.return;if(Zp(Q),Q===z){oe=null;break}if(G!==null){G.return=ne,oe=G;break}oe=ne}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var rt=le.sibling;le.sibling=null,le=rt}while(le!==null)}}oe=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,oe=v;else e:for(;oe!==null;){if(m=oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:da(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,oe=M;break e}oe=m.return}}var x=n.current;for(oe=x;oe!==null;){v=oe;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,oe=b;else e:for(v=x;oe!==null;){if(I=oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Kl(9,I)}}catch(ue){Ze(I,I.return,ue)}if(I===v){oe=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,oe=J;break e}oe=I.return}}if(Oe=d,jr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ci,n)}catch{}c=!0}return c}finally{Ae=a,mn.transition=i}}return!1}function mm(n,i,a){i=js(a,i),i=Op(n,i,1),n=Hr(n,i,1),i=Bt(),n!==null&&(Dr(n,1,i),Qt(n,i))}function Ze(n,i,a){if(n.tag===3)mm(n,n,a);else for(;i!==null;){if(i.tag===3){mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qr===null||!qr.has(c))){n=js(a,n),n=Lp(i,n,1),i=Hr(i,n,1),n=Bt(),i!==null&&(Dr(i,1,n),Qt(i,n));break}}i=i.return}}function eE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Bt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(Rt&a)===a&&(ft===4||ft===3&&(Rt&130023424)===Rt&&500>$e()-Ih?ji(n,0):Th|=a),Qt(n,i)}function gm(n,i){i===0&&(n.mode&1?(i=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):i=1);var a=Bt();n=fr(n,i),n!==null&&(Dr(n,i,a),Qt(n,a))}function tE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),gm(n,a)}function nE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),gm(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Kt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Kt=!1,$v(n,i,a);Kt=!!(n.flags&131072)}else Kt=!1,Ge&&i.flags&1048576&&Yf(i,Nl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wl(n,i),n=i.pendingProps;var d=Ls(i,Nt.current);zs(i,a),d=eh(null,i,c,n,d,a);var m=th();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qt(c)?(m=!0,Al(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Kc(i),d.updater=$l,i.stateNode=d,d._reactInternals=i,ah(i,c,n,a),i=hh(null,i,c,!0,m,a)):(i.tag=0,Ge&&m&&bc(i),zt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Wl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=iE(c),n=Pn(c,n),d){case 0:i=ch(null,i,c,n,a);break e;case 1:i=$p(null,i,c,n,a);break e;case 11:i=Fp(null,i,c,n,a);break e;case 14:i=Up(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),ch(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),$p(n,i,c,d,a);case 3:e:{if(Hp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,sp(n,i),Ml(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=js(Error(t(423)),i),i=Wp(n,i,c,a,d);break e}else if(c!==d){d=js(Error(t(424)),i),i=Wp(n,i,c,a,d);break e}else for(sn=Ur(i.stateNode.containerInfo.firstChild),rn=i,Ge=!0,An=null,a=rp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===d){i=mr(n,i,a);break e}zt(n,i,c,a)}i=i.child}return i;case 5:return lp(i),n===null&&zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,xc(c,d)?v=null:m!==null&&xc(c,m)&&(i.flags|=32),jp(n,i),zt(n,i,v,a),i.child;case 6:return n===null&&zc(i),null;case 13:return qp(n,i,a);case 4:return Gc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Fs(i,null,c,a):zt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Fp(n,i,c,d,a);case 7:return zt(n,i,i.pendingProps,a),i.child;case 8:return zt(n,i,i.pendingProps.children,a),i.child;case 12:return zt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,He(Ol,c._currentValue),c._currentValue=v,m!==null)if(Cn(m.value,v)){if(m.children===d.children&&!Wt.current){i=mr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=pr(-1,a&-a),P.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),z.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Wc(m.return,a,i),I.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Wc(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}zt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,zs(i,a),d=fn(d),c=c(d),i.flags|=1,zt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),Up(n,i,c,d,a);case 15:return zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Wl(n,i),i.tag=1,qt(c)?(n=!0,Al(i)):n=!1,zs(i,a),xp(i,c,d),ah(i,c,d,a),hh(null,i,c,!0,n,a);case 19:return Gp(n,i,a);case 22:return Bp(n,i,a)}throw Error(t(156,i.tag))};function _m(n,i){return fs(n,i)}function rE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,i,a,c){return new rE(n,i,a,c)}function xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function iE(n){if(typeof n=="function")return xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Pt)return 14}return 2}function Yr(n,i){var a=n.alternate;return a===null?(a=gn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function nu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")xh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Hi(a.children,d,m,i);case T:v=8,d|=8;break;case S:return n=gn(12,a,i,d|2),n.elementType=S,n.lanes=m,n;case R:return n=gn(13,a,i,d),n.elementType=R,n.lanes=m,n;case tt:return n=gn(19,a,i,d),n.elementType=tt,n.lanes=m,n;case Ue:return ru(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case D:v=9;break e;case L:v=11;break e;case Pt:v=14;break e;case kt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Hi(n,i,a,c){return n=gn(7,n,c,i),n.lanes=a,n}function ru(n,i,a,c){return n=gn(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Dh(n,i,a){return n=gn(6,n,null,i),n.lanes=a,n}function Oh(n,i,a){return i=gn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function sE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lh(n,i,a,c,d,m,v,I,P){return n=new sE(n,i,a,I,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kc(m),n}function oE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function vm(n){if(!n)return Br;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return Kf(n,a,i)}return i}function Em(n,i,a,c,d,m,v,I,P){return n=Lh(a,c,!0,n,d,m,v,I,P),n.context=vm(null),a=n.current,c=Bt(),d=Gr(a),m=pr(c,d),m.callback=i??null,Hr(a,m,d),n.current.lanes=d,Dr(n,d,c),Qt(n,c),n}function iu(n,i,a,c){var d=i.current,m=Bt(),v=Gr(d);return a=vm(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hr(d,i,v),n!==null&&(xn(n,d,v,m),Vl(n,d,v)),v}function su(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Vh(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mh(n){this._internalRoot=n}ou.prototype.render=Mh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));iu(n,i,null,null)},ou.prototype.unmount=Mh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Bi(function(){iu(null,n,null,null)}),i[ur]=null}};function ou(n){this._internalRoot=n}ou.prototype.unstable_scheduleHydration=function(n){if(n){var i=ol();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Fn.length&&i!==0&&i<Fn[a].priority;a++);Fn.splice(a,0,n),a===0&&ul(n)}};function bh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function aE(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var z=su(v);m.call(z)}}var v=Em(i,c,n,0,null,!1,!1,"",Im);return n._reactRootContainer=v,n[ur]=v.current,Zo(n.nodeType===8?n.parentNode:n),Bi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var z=su(P);I.call(z)}}var P=Lh(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=P,n[ur]=P.current,Zo(n.nodeType===8?n.parentNode:n),Bi(function(){iu(i,P,a,c)}),P}function lu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var P=su(v);I.call(P)}}iu(i,v,n,d)}else v=aE(a,i,n,d,c);return su(v)}il=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Nr(i.pendingLanes);a!==0&&(Or(i,a|1),Qt(i,$e()),!(Oe&6)&&(Ws=$e()+500,jr()))}break;case 13:Bi(function(){var c=fr(n,1);if(c!==null){var d=Bt();xn(c,n,1,d)}}),Vh(n,1)}},gs=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var a=Bt();xn(i,n,134217728,a)}Vh(n,134217728)}},sl=function(n){if(n.tag===13){var i=Gr(n),a=fr(n,i);if(a!==null){var c=Bt();xn(a,n,i,c)}Vh(n,i)}},ol=function(){return Ae},al=function(n,i){var a=Ae;try{return Ae=n,i()}finally{Ae=a}},as=function(n,i,a){switch(i){case"input":if(So(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));ts(c),So(c,d)}}}break;case"textarea":ss(n,a);break;case"select":i=a.value,i!=null&&tr(n,!!a.multiple,i,!1)}},wi=Ph,Lo=Bi;var lE={usingClientEntryPoint:!1,Events:[na,Ds,Rl,Mn,Oo,Ph]},ga={findFiberByHostInstance:Oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bo(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Ci=uu.inject(uE),Zt=uu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(i))throw Error(t(200));return oE(n,i,null,a)},Yt.createRoot=function(n,i){if(!bh(n))throw Error(t(299));var a=!1,c="",d=Tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lh(n,1,!1,null,null,a,!1,c,d),n[ur]=i.current,Zo(n.nodeType===8?n.parentNode:n),new Mh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Bi(n)},Yt.hydrate=function(n,i,a){if(!au(i))throw Error(t(200));return lu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!bh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Em(i,null,n,1,a??null,d,!1,m,v),n[ur]=i.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ou(i)},Yt.render=function(n,i,a){if(!au(i))throw Error(t(200));return lu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!au(n))throw Error(t(40));return n._reactRootContainer?(Bi(function(){lu(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},Yt.unstable_batchedUpdates=Ph,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!au(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return lu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var xm;function yE(){if(xm)return zh.exports;xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zh.exports=gE(),zh.exports}var Dm;function _E(){if(Dm)return cu;Dm=1;var r=yE();return cu.createRoot=r.createRoot,cu.hydrateRoot=r.hydrateRoot,cu}var vE=_E(),Om={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},EE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},ny={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,C=(l&3)<<4|f>>4;let A=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(A=64)),s.push(t[w],t[C],t[A],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ty(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):EE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const C=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||C==null)throw new wE;const A=l<<2|f>>4;if(s.push(A),_!==64){const F=f<<4&240|_>>2;if(s.push(F),C!==64){const U=_<<6&192|C;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class wE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(r){const e=ty(r);return ny.encodeByteArray(e,!0)},Nu=function(r){return TE(r).replace(/\./g,"")},ry=function(r){try{return ny.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SE=()=>IE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof Om>"u")return;const r=Om.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},CE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ry(r[1]);return e&&JSON.parse(e)},Ku=()=>{try{return SE()||RE()||CE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iy=r=>{var e,t;return(t=(e=Ku())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},AE=r=>{const e=iy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},sy=()=>{var r;return(r=Ku())===null||r===void 0?void 0:r.config},oy=r=>{var e;return(e=Ku())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Nu(JSON.stringify(t)),Nu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function xE(){var r;const e=(r=Ku())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VE(){const r=bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ME(){return!xE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function FE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=UE,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?zE(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,f,s)}}function zE(r,e){return r.replace(BE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const BE=/\{\$([^}]+)}/g;function jE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function xu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Lm(l)&&Lm(h)){if(!xu(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Lm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ea(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function wa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function $E(r,e){const t=new HE(r,e);return t.subscribe.bind(t)}class HE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");WE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=$h),o.error===void 0&&(o.error=$h),o.complete===void 0&&(o.complete=$h);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function $h(){}/**
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
 */function Cr(r){return r&&r._delegate?r._delegate:r}class Yi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wi="[DEFAULT]";/**
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
 */class qE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new PE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(r){return r===Wi?void 0:r}function GE(r){return r.instantiationMode==="EAGER"}/**
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
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const YE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},XE=Ce.INFO,JE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},ZE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=JE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=XE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const ew=(r,e)=>e.some(t=>r instanceof t);let Vm,Mm;function tw(){return Vm||(Vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nw(){return Mm||(Mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ay=new WeakMap,rd=new WeakMap,ly=new WeakMap,Hh=new WeakMap,Od=new WeakMap;function rw(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(si(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ay.set(t,r)}).catch(()=>{}),Od.set(e,r),e}function iw(r){if(rd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});rd.set(r,e)}let id={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return rd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ly.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function sw(r){id=r(id)}function ow(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Wh(this),e,...t);return ly.set(s,e.sort?e.sort():[e]),si(s)}:nw().includes(r)?function(...e){return r.apply(Wh(this),e),si(ay.get(this))}:function(...e){return si(r.apply(Wh(this),e))}}function aw(r){return typeof r=="function"?ow(r):(r instanceof IDBTransaction&&iw(r),ew(r,tw())?new Proxy(r,id):r)}function si(r){if(r instanceof IDBRequest)return rw(r);if(Hh.has(r))return Hh.get(r);const e=aw(r);return e!==r&&(Hh.set(r,e),Od.set(e,r)),e}const Wh=r=>Od.get(r);function lw(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=si(h);return s&&h.addEventListener("upgradeneeded",g=>{s(si(h.result),g.oldVersion,g.newVersion,si(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const uw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],qh=new Map;function bm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=cw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uw.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return qh.set(e,l),l}sw(r=>({...r,get:(e,t,s)=>bm(e,t)||r.get(e,t,s),has:(e,t)=>!!bm(e,t)||r.has(e,t)}));/**
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
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",Fm="0.10.17";/**
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
 */const Tr=new Dd("@firebase/app"),fw="@firebase/app-compat",pw="@firebase/analytics-compat",mw="@firebase/analytics",gw="@firebase/app-check-compat",yw="@firebase/app-check",_w="@firebase/auth",vw="@firebase/auth-compat",Ew="@firebase/database",ww="@firebase/data-connect",Tw="@firebase/database-compat",Iw="@firebase/functions",Sw="@firebase/functions-compat",Rw="@firebase/installations",Cw="@firebase/installations-compat",Aw="@firebase/messaging",Pw="@firebase/messaging-compat",kw="@firebase/performance",Nw="@firebase/performance-compat",xw="@firebase/remote-config",Dw="@firebase/remote-config-compat",Ow="@firebase/storage",Lw="@firebase/storage-compat",Vw="@firebase/firestore",Mw="@firebase/vertexai",bw="@firebase/firestore-compat",Fw="firebase",Uw="11.1.0";/**
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
 */const od="[DEFAULT]",zw={[sd]:"fire-core",[fw]:"fire-core-compat",[mw]:"fire-analytics",[pw]:"fire-analytics-compat",[yw]:"fire-app-check",[gw]:"fire-app-check-compat",[_w]:"fire-auth",[vw]:"fire-auth-compat",[Ew]:"fire-rtdb",[ww]:"fire-data-connect",[Tw]:"fire-rtdb-compat",[Iw]:"fire-fn",[Sw]:"fire-fn-compat",[Rw]:"fire-iid",[Cw]:"fire-iid-compat",[Aw]:"fire-fcm",[Pw]:"fire-fcm-compat",[kw]:"fire-perf",[Nw]:"fire-perf-compat",[xw]:"fire-rc",[Dw]:"fire-rc-compat",[Ow]:"fire-gcs",[Lw]:"fire-gcs-compat",[Vw]:"fire-fst",[bw]:"fire-fst-compat",[Mw]:"fire-vertex","fire-js":"fire-js",[Fw]:"fire-js-all"};/**
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
 */const Du=new Map,Bw=new Map,ad=new Map;function Um(r,e){try{r.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function io(r){const e=r.name;if(ad.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,r);for(const t of Du.values())Um(t,r);for(const t of Bw.values())Um(t,r);return!0}function Ld(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function yr(r){return r.settings!==void 0}/**
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
 */const jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new Fa("app","Firebase",jw);/**
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
 */class $w{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=Uw;function uy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:od,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=sy()),!t)throw oi.create("no-options");const l=Du.get(o);if(l){if(xu(t,l.options)&&xu(s,l.config))return l;throw oi.create("duplicate-app",{appName:o})}const h=new QE(o);for(const g of ad.values())h.addComponent(g);const f=new $w(t,s,h);return Du.set(o,f),f}function cy(r=od){const e=Du.get(r);if(!e&&r===od&&sy())return uy();if(!e)throw oi.create("no-app",{appName:r});return e}function ai(r,e,t){var s;let o=(s=zw[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(f.join(" "));return}io(new Yi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Hw="firebase-heartbeat-database",Ww=1,Na="firebase-heartbeat-store";let Kh=null;function hy(){return Kh||(Kh=lw(Hw,Ww,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Na)}catch(t){console.warn(t)}}}}).catch(r=>{throw oi.create("idb-open",{originalErrorMessage:r.message})})),Kh}async function qw(r){try{const t=(await hy()).transaction(Na),s=await t.objectStore(Na).get(dy(r));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function zm(r,e){try{const s=(await hy()).transaction(Na,"readwrite");await s.objectStore(Na).put(e,dy(r)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function dy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Kw=1024,Gw=30*24*60*60*1e3;class Qw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=Gw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bm(),{heartbeatsToSend:s,unsentEntries:o}=Yw(this._heartbeatsCache.heartbeats),l=Nu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Tr.warn(t),""}}}function Bm(){return new Date().toISOString().substring(0,10)}function Yw(r,e=Kw){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),jm(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?FE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function jm(r){return Nu(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Jw(r){io(new Yi("platform-logger",e=>new hw(e),"PRIVATE")),io(new Yi("heartbeat",e=>new Qw(e),"PRIVATE")),ai(sd,Fm,r),ai(sd,Fm,"esm2017"),ai("fire-js","")}Jw("");function Vd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function fy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=fy,py=new Fa("auth","Firebase",fy());/**
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
 */const Ou=new Dd("@firebase/auth");function eT(r,...e){Ou.logLevel<=Ce.WARN&&Ou.warn(`Auth (${fo}): ${r}`,...e)}function vu(r,...e){Ou.logLevel<=Ce.ERROR&&Ou.error(`Auth (${fo}): ${r}`,...e)}/**
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
 */function Dn(r,...e){throw Md(r,...e)}function Kn(r,...e){return Md(r,...e)}function my(r,e,t){const s=Object.assign(Object.assign({},Zw()),{[e]:t});return new Fa("auth","Firebase",s).create(e,{appName:r.name})}function li(r){return my(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return py.create(r,...e)}function ge(r,e,...t){if(!r)throw Md(e,...t)}function _r(r){const e="INTERNAL ASSERTION FAILED: "+r;throw vu(e),new Error(e)}function Ir(r,e){r||_r(e)}/**
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
 */function ld(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tT(){return $m()==="http:"||$m()==="https:"}function $m(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function nT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tT()||OE()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class za{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=NE()||LE()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bd(r,e){Ir(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class gy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sT=new za(3e4,6e4);function Zi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function mi(r,e,t,s,o={}){return yy(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=Ua(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return DE()||(_.referrerPolicy="no-referrer"),gy.fetch()(_y(r,r.config.apiHost,t,f),_)})}async function yy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},iT),e);try{const o=new aT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw hu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw hu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw hu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw my(r,w,_);Dn(r,w)}}catch(o){if(o instanceof Rr)throw o;Dn(r,"network-request-failed",{message:String(o)})}}async function Gu(r,e,t,s,o={}){const l=await mi(r,e,t,s,o);return"mfaPendingCredential"in l&&Dn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function _y(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?bd(r.config,o):`${r.config.apiScheme}://${o}`}function oT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Kn(this.auth,"network-request-failed")),sT.get())})}}function hu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Kn(r,e,s);return o.customData._tokenResponse=t,o}function Hm(r){return r!==void 0&&r.enterprise!==void 0}class lT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return oT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uT(r,e){return mi(r,"GET","/v2/recaptchaConfig",Zi(r,e))}/**
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
 */async function cT(r,e){return mi(r,"POST","/v1/accounts:delete",e)}async function vy(r,e){return mi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(r,e=!1){const t=Cr(r),s=await t.getIdToken(e),o=Fd(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ra(Gh(o.auth_time)),issuedAtTime:Ra(Gh(o.iat)),expirationTime:Ra(Gh(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Gh(r){return Number(r)*1e3}function Fd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=ry(t);return o?JSON.parse(o):(vu("Failed to decode base64 JWT payload"),null)}catch(o){return vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wm(r){const e=Fd(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&dT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function dT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class fT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await xa(r,vy(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Ey(l.providerUserInfo):[],f=mT(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,C={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new ud(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,C)}async function pT(r){const e=Cr(r);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ey(r){return r.map(e=>{var{providerId:t}=e,s=Vd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gT(r,e){const t=await yy(r,{},async()=>{const s=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=_y(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",gy.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yT(r,e){return mi(r,"POST","/v2/accounts:revokeToken",Zi(r,e))}/**
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
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await gT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Js;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ge(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Jr(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ud(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await xa(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Lu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yr(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await xa(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,U=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,K=(_=t.createdAt)!==null&&_!==void 0?_:void 0,X=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:re,emailVerified:ce,isAnonymous:Te,providerData:ve,stsTokenManager:N}=t;ge(re&&N,e,"internal-error");const T=Js.fromJSON(this.name,N);ge(typeof re=="string",e,"internal-error"),Jr(C,e.name),Jr(A,e.name),ge(typeof ce=="boolean",e,"internal-error"),ge(typeof Te=="boolean",e,"internal-error"),Jr(F,e.name),Jr(U,e.name),Jr($,e.name),Jr(B,e.name),Jr(K,e.name),Jr(X,e.name);const S=new vr({uid:re,auth:e,email:A,emailVerified:ce,displayName:C,isAnonymous:Te,photoURL:U,phoneNumber:F,tenantId:$,stsTokenManager:T,createdAt:K,lastLoginAt:X});return ve&&Array.isArray(ve)&&(S.providerData=ve.map(k=>Object.assign({},k))),B&&(S._redirectEventId=B),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const l=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Lu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ey(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Js;f.updateFromIdToken(s);const g=new vr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ud(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const qm=new Map;function Er(r){Ir(r instanceof Function,"Expected a class definition");let e=qm.get(r);return e?(Ir(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,qm.set(r,e),e)}/**
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
 */class wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wy.type="NONE";const Km=wy;/**
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
 */function Eu(r,e,t){return`firebase:${r}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Eu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Eu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Er(Km),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Er(Km);const h=Eu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){const C=vr._fromJSON(e,w);_!==l&&(f=C),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Zs(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new Zs(l,e,s))}}/**
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
 */function Gm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ay(e))return"Blackberry";if(Py(e))return"Webos";if(Iy(e))return"Safari";if((e.includes("chrome/")||Sy(e))&&!e.includes("edge/"))return"Chrome";if(Cy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ty(r=bt()){return/firefox\//i.test(r)}function Iy(r=bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sy(r=bt()){return/crios\//i.test(r)}function Ry(r=bt()){return/iemobile/i.test(r)}function Cy(r=bt()){return/android/i.test(r)}function Ay(r=bt()){return/blackberry/i.test(r)}function Py(r=bt()){return/webos/i.test(r)}function Ud(r=bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _T(r=bt()){var e;return Ud(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return VE()&&document.documentMode===10}function ky(r=bt()){return Ud(r)||Cy(r)||Py(r)||Ay(r)||/windows phone/i.test(r)||Ry(r)}/**
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
 */function Ny(r,e=[]){let t;switch(r){case"Browser":t=Gm(bt());break;case"Worker":t=`${Gm(bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fo}/${s}`}/**
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
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wT(r,e={}){return mi(r,"GET","/v2/passwordPolicy",Zi(r,e))}/**
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
 */const TT=6;class IT{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class ST{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vy(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yr(this.app))return Promise.reject(li(this));const t=e?Cr(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yr(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yr(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wT(this),t=new IT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function po(r){return Cr(r)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=$E(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(r){Qu=r}function xy(r){return Qu.loadJS(r)}function CT(){return Qu.recaptchaEnterpriseScript}function AT(){return Qu.gapiScript}function PT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class kT{constructor(){this.enterprise=new NT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class NT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xT="recaptcha-enterprise",Dy="NO_RECAPTCHA";class DT{constructor(e){this.type=xT,this.auth=po(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{uT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new lT(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Hm(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(Dy)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kT().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Hm(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=CT();g.length!==0&&(g+=f),xy(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Ym(r,e,t,s=!1,o=!1){const l=new DT(r);let h;if(o)h=Dy;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Xm(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ym(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ym(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function OT(r,e){const t=Ld(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(xu(l,e??{}))return o;Dn(o,"already-initialized")}return t.initialize({options:e})}function LT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Er);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function VT(r,e,t){const s=po(r);ge(s._canInitEmulator,s,"emulator-config-failed"),ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Oy(e),{host:h,port:f}=MT(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),bT()}function Oy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function MT(r){const e=Oy(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Jm(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Jm(h)}}}function Jm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function bT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class zd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function FT(r,e){return mi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function UT(r,e){return Gu(r,"POST","/v1/accounts:signInWithPassword",Zi(r,e))}/**
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
 */async function zT(r,e){return Gu(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,e))}async function BT(r,e){return Gu(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,e))}/**
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
 */class Da extends zd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Da(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Da(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,t,"signInWithPassword",UT);case"emailLink":return zT(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,s,"signUpPassword",FT);case"emailLink":return BT(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function eo(r,e){return Gu(r,"POST","/v1/accounts:signInWithIdp",Zi(r,e))}/**
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
 */const jT="http://localhost";class Xi extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Vd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Xi(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:jT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
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
 */function $T(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HT(r){const e=Ea(wa(r)).link,t=e?Ea(wa(e)).deep_link_id:null,s=Ea(wa(r)).deep_link_id;return(s?Ea(wa(s)).link:null)||s||t||e||r}class Bd{constructor(e){var t,s,o,l,h,f;const g=Ea(wa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,C=$T((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&w&&C,"argument-error"),this.apiKey=_,this.operation=C,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=HT(e);try{return new Bd(t)}catch{return null}}}/**
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
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,t){return Da._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Bd.parseLink(t);return ge(s,"argument-error"),Da._fromEmailAndCode(e,s.code,s.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ly{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ba extends Ly{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends Ba{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class ei extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
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
 */class ti extends Ba{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Ba{constructor(){super("twitter.com")}static credential(e,t){return Xi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */class so{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await vr._fromIdTokenResponse(e,s,o),h=Zm(s);return new so({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Zm(s);return new so({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Zm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Vu extends Rr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Vu(e,t,s,o)}}function Vy(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(r,l,e,s):l})}async function WT(r,e,t=!1){const s=await xa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return so._forOperation(r,"link",s)}/**
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
 */async function qT(r,e,t=!1){const{auth:s}=r;if(yr(s.app))return Promise.reject(li(s));const o="reauthenticate";try{const l=await xa(r,Vy(s,o,e,r),t);ge(l.idToken,s,"internal-error");const h=Fd(l.idToken);ge(h,s,"internal-error");const{sub:f}=h;return ge(r.uid===f,s,"user-mismatch"),so._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Dn(s,"user-mismatch"),l}}/**
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
 */async function My(r,e,t=!1){if(yr(r.app))return Promise.reject(li(r));const s="signIn",o=await Vy(r,s,e),l=await so._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function KT(r,e){return My(po(r),e)}/**
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
 */async function GT(r){const e=po(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function QT(r,e,t){return yr(r.app)?Promise.reject(li(r)):KT(Cr(r),mo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&GT(r),s})}function YT(r,e,t,s){return Cr(r).onIdTokenChanged(e,t,s)}function XT(r,e,t){return Cr(r).beforeAuthStateChanged(e,t)}function JT(r,e,t,s){return Cr(r).onAuthStateChanged(e,t,s)}const Mu="__sak";/**
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
 */class by{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZT=1e3,eI=10;class Fy extends by{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ky(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);vT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fy.type="LOCAL";const tI=Fy;/**
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
 */class Uy extends by{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uy.type="SESSION";const zy=Uy;/**
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
 */function nI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Yu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await nI(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
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
 */function jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=jd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const A=C;if(A.data.eventId===_)switch(A.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Gn(){return window}function iI(r){Gn().location.href=r}/**
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
 */function By(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function aI(){return By()?self:null}/**
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
 */const jy="firebaseLocalStorageDb",lI=1,bu="firebaseLocalStorage",$y="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xu(r,e){return r.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function uI(){const r=indexedDB.deleteDatabase(jy);return new ja(r).toPromise()}function cd(){const r=indexedDB.open(jy,lI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(bu,{keyPath:$y})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(bu)?e(s):(s.close(),await uI(),e(await cd()))})})}async function eg(r,e,t){const s=Xu(r,!0).put({[$y]:e,value:t});return new ja(s).toPromise()}async function cI(r,e){const t=Xu(r,!1).get(e),s=await new ja(t).toPromise();return s===void 0?null:s.value}function tg(r,e){const t=Xu(r,!0).delete(e);return new ja(t).toPromise()}const hI=800,dI=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await eg(e,Mu,"1"),await tg(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>cI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Xu(o,!1).getAll();return new ja(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const fI=Hy;new za(3e4,6e4);/**
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
 */function pI(r,e){return e?Er(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class $d extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mI(r){return My(r.auth,new $d(r),r.bypassAuthState)}function gI(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),qT(t,new $d(r),r.bypassAuthState)}async function yI(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),WT(t,new $d(r),r.bypassAuthState)}/**
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
 */class Wy{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mI;case"linkViaPopup":case"linkViaRedirect":return yI;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Dn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _I=new za(2e3,1e4);class Xs extends Wy{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_I.get())};e()}}Xs.currentPopupAction=null;/**
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
 */const vI="pendingRedirect",wu=new Map;class EI extends Wy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const s=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(r,e){const t=SI(e),s=II(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function TI(r,e){wu.set(r._key(),e)}function II(r){return Er(r._redirectPersistence)}function SI(r){return Eu(vI,r.config.apiKey,r.name)}async function RI(r,e,t=!1){if(yr(r.app))return Promise.reject(li(r));const s=po(r),o=pI(s,e),h=await new EI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const CI=10*60*1e3;class AI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Kn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function qy({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(r);default:return!1}}/**
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
 */async function kI(r,e={}){return mi(r,"GET","/v1/projects",e)}/**
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
 */const NI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function DI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await kI(r);for(const t of e)try{if(OI(t))return}catch{}Dn(r,"unauthorized-domain")}function OI(r){const e=ld(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!xI.test(t))return!1;if(NI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const LI=new za(3e4,6e4);function rg(){const r=Gn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function VI(r){return new Promise((e,t)=>{var s,o,l;function h(){rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rg(),t(Kn(r,"network-request-failed"))},timeout:LI.get()})}if(!((o=(s=Gn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Gn().gapi)===null||l===void 0)&&l.load)h();else{const f=PT("iframefcb");return Gn()[f]=()=>{gapi.load?h():t(Kn(r,"network-request-failed"))},xy(`${AT()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function MI(r){return Tu=Tu||VI(r),Tu}/**
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
 */const bI=new za(5e3,15e3),FI="__/auth/iframe",UI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jI(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?bd(e,UI):`https://${r.config.authDomain}/${FI}`,s={apiKey:e.apiKey,appName:r.name,v:fo},o=BI.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Ua(s).slice(1)}`}async function $I(r){const e=await MI(r),t=Gn().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:jI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Kn(r,"network-request-failed"),f=Gn().setTimeout(()=>{l(h)},bI.get());function g(){Gn().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,qI=600,KI="_blank",GI="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QI(r,e,t,s=WI,o=qI){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},HI),{width:s.toString(),height:o.toString(),top:l,left:h}),_=bt().toLowerCase();t&&(f=Sy(_)?KI:t),Ty(_)&&(e=e||GI,g.scrollbars="yes");const w=Object.entries(g).reduce((A,[F,U])=>`${A}${F}=${U},`,"");if(_T(_)&&f!=="_self")return YI(e||"",f),new ig(null);const C=window.open(e||"",f,w);ge(C,r,"popup-blocked");try{C.focus()}catch{}return new ig(C)}function YI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const XI="__/auth/handler",JI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function sg(r,e,t,s,o,l){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:fo,eventId:o};if(e instanceof Ly){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",jE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Ba){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${ZI}=${encodeURIComponent(g)}`:"";return`${eS(r)}?${Ua(f).slice(1)}${_}`}function eS({config:r}){return r.emulator?bd(r,JI):`https://${r.authDomain}/${XI}`}/**
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
 */const Qh="webStorageSupport";class tS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zy,this._completeRedirectFn=RI,this._overrideRedirectResult=TI}async _openPopup(e,t,s,o){var l;Ir((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await sg(e,t,s,ld(),o);return QI(e,h,jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await sg(e,t,s,ld(),o);return iI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Ir(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $I(e),s=new AI(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qh,{type:Qh},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Qh];h!==void 0&&t(!!h),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ky()||Iy()||Ud()}}const nS=tS;var og="@firebase/auth",ag="1.8.1";/**
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
 */class rS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sS(r){io(new Yi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(r)},_=new ST(s,o,l,g);return LT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),io(new Yi("auth-internal",e=>{const t=po(e.getProvider("auth").getImmediate());return(s=>new rS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(og,ag,iS(r)),ai(og,ag,"esm2017")}/**
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
 */const oS=5*60,aS=oy("authIdTokenMaxAge")||oS;let lg=null;const lS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>aS)return;const o=t==null?void 0:t.token;lg!==o&&(lg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hd(r=cy()){const e=Ld(r,"auth");if(e.isInitialized())return e.getImmediate();const t=OT(r,{popupRedirectResolver:nS,persistence:[fI,tI,zy]}),s=oy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=lS(l.toString());XT(t,h,()=>h(t.currentUser)),YT(t,f=>h(f))}}const o=iy("auth");return o&&VT(t,`http://${o}`),t}function uS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}RT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Kn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",uS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sS("Browser");var cS="firebase",hS="11.1.0";/**
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
 */ai(cS,hS,"app");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki,Ky;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function S(){}S.prototype=T.prototype,N.D=T.prototype,N.prototype=new S,N.prototype.constructor=N,N.C=function(k,D,L){for(var R=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)R[tt-2]=arguments[tt];return T.prototype[D].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)k[D]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(D=0;16>D;++D)k[D]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=N.g[0],S=N.g[1],D=N.g[2];var L=N.g[3],R=T+(L^S&(D^L))+k[0]+3614090360&4294967295;T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[1]+3905402710&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[3]+3250441966&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[4]+4118548399&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[5]+1200080426&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[7]+4249261313&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[8]+1770035416&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[9]+2336552879&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[11]+2304563134&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[12]+1804603682&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[13]+4254626195&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[15]+1236535329&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(D^L&(S^D))+k[1]+4129170786&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[6]+3225465664&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[0]+3921069994&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[5]+3593408605&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[10]+38016083&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[4]+3889429448&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[9]+568446438&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[14]+3275163606&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[8]+1163531501&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[13]+2850285829&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[2]+4243563512&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[12]+2368359562&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(S^D^L)+k[5]+4294588738&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[8]+2272392833&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[14]+4259657740&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[1]+2763975236&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[4]+1272893353&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[10]+3200236656&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[13]+681279174&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[0]+3936430074&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[6]+76029189&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[9]+3654602809&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[12]+3873151461&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[2]+3299628645&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(D^(S|~L))+k[0]+4096336452&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[7]+1126891415&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[5]+4237533241&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[12]+1700485571&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[3]+2399980690&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[1]+2240044497&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[8]+1873313359&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[15]+4264355552&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[13]+1309151649&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[4]+4149444226&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[11]+3174756917&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var S=T-this.blockSize,k=this.B,D=this.h,L=0;L<T;){if(D==0)for(;L<=S;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<T;)if(k[D++]=N.charCodeAt(L++),D==this.blockSize){o(this,k),D=0;break}}else for(;L<T;)if(k[D++]=N[L++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var S=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=S&255,S/=256;for(this.u(N),N=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)N[S++]=this.g[T]>>>k&255;return N};function l(N,T){var S=f;return Object.prototype.hasOwnProperty.call(S,N)?S[N]:S[N]=T(N)}function h(N,T){this.h=T;for(var S=[],k=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;k&&L==T||(S[D]=L,k=!1)}this.g=S}var f={};function g(N){return-128<=N&&128>N?l(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return B(_(-N));for(var T=[],S=1,k=0;N>=S;k++)T[k]=N/S|0,S*=4294967296;return new h(T,0)}function w(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return B(w(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(T,8)),k=C,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),R=parseInt(N.substring(D,D+L),T);8>L?(L=_(Math.pow(T,L)),k=k.j(L).add(_(R))):(k=k.j(S),k=k.add(_(R)))}return k}var C=g(0),A=g(1),F=g(16777216);r=h.prototype,r.m=function(){if($(this))return-B(this).m();for(var N=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);N+=(0<=k?k:4294967296+k)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(U(this))return"0";if($(this))return"-"+B(this).toString(N);for(var T=_(Math.pow(N,6)),S=this,k="";;){var D=ce(S,T).g;S=K(S,D.j(T));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(N);if(S=D,U(S))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function U(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function $(N){return N.h==-1}r.l=function(N){return N=K(this,N),$(N)?-1:U(N)?0:1};function B(N){for(var T=N.g.length,S=[],k=0;k<T;k++)S[k]=~N.g[k];return new h(S,~N.h).add(A)}r.abs=function(){return $(this)?B(this):this},r.add=function(N){for(var T=Math.max(this.g.length,N.g.length),S=[],k=0,D=0;D<=T;D++){var L=k+(this.i(D)&65535)+(N.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=R>>>16,L&=65535,R&=65535,S[D]=R<<16|L}return new h(S,S[S.length-1]&-2147483648?-1:0)};function K(N,T){return N.add(B(T))}r.j=function(N){if(U(this)||U(N))return C;if($(this))return $(N)?B(this).j(B(N)):B(B(this).j(N));if($(N))return B(this.j(B(N)));if(0>this.l(F)&&0>N.l(F))return _(this.m()*N.m());for(var T=this.g.length+N.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var L=this.i(k)>>>16,R=this.i(k)&65535,tt=N.i(D)>>>16,Pt=N.i(D)&65535;S[2*k+2*D]+=R*Pt,X(S,2*k+2*D),S[2*k+2*D+1]+=L*Pt,X(S,2*k+2*D+1),S[2*k+2*D+1]+=R*tt,X(S,2*k+2*D+1),S[2*k+2*D+2]+=L*tt,X(S,2*k+2*D+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function X(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function re(N,T){this.g=N,this.h=T}function ce(N,T){if(U(T))throw Error("division by zero");if(U(N))return new re(C,C);if($(N))return T=ce(B(N),T),new re(B(T.g),B(T.h));if($(T))return T=ce(N,B(T)),new re(B(T.g),T.h);if(30<N.g.length){if($(N)||$(T))throw Error("slowDivide_ only works with positive integers.");for(var S=A,k=T;0>=k.l(N);)S=Te(S),k=Te(k);var D=ve(S,1),L=ve(k,1);for(k=ve(k,2),S=ve(S,2);!U(k);){var R=L.add(k);0>=R.l(N)&&(D=D.add(S),L=R),k=ve(k,1),S=ve(S,1)}return T=K(N,D.j(T)),new re(D,T)}for(D=C;0<=N.l(T);){for(S=Math.max(1,Math.floor(N.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=_(S),R=L.j(T);$(R)||0<R.l(N);)S-=k,L=_(S),R=L.j(T);U(L)&&(L=A),D=D.add(L),N=K(N,R)}return new re(D,N)}r.A=function(N){return ce(this,N).h},r.and=function(N){for(var T=Math.max(this.g.length,N.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&N.i(k);return new h(S,this.h&N.h)},r.or=function(N){for(var T=Math.max(this.g.length,N.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|N.i(k);return new h(S,this.h|N.h)},r.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^N.i(k);return new h(S,this.h^N.h)};function Te(N){for(var T=N.g.length+1,S=[],k=0;k<T;k++)S[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(S,N.h)}function ve(N,T){var S=T>>5;T%=32;for(var k=N.g.length-S,D=[],L=0;L<k;L++)D[L]=0<T?N.i(L+S)>>>T|N.i(L+S+1)<<32-T:N.i(L+S);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ky=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ki=h}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gy,Ta,Qy,Iu,dd,Yy,Xy,Jy;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var V=u[E];if(!(V in y))break e;y=y[V]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,V={next:function(){if(!E&&y<u.length){var j=y++;return{value:p(j,u[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function C(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function A(u,p,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,A.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function U(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,V,j){for(var Z=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Z[Fe-2]=arguments[Fe];return p.prototype[V].apply(E,Z)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const V=u.length||0,j=E.length||0;u.length=V+j;for(let Z=0;Z<j;Z++)u[V+Z]=E[Z]}else u.push(E)}}class K{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function X(u){return/^[\s\xa0]*$/.test(u)}function re(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Te=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function ve(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function T(u){const p={};for(const y in u)p[y]=u[y];return p}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let y,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(y in E)u[y]=E[y];for(let j=0;j<S.length;j++)y=S[j],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function L(u){f.setTimeout(()=>{throw u},0)}function R(){var u=de;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const E=Pt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new K(()=>new kt,u=>u.reset());class kt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,ee=!1,de=new tt,ie=()=>{const u=f.Promise.resolve(void 0);Ue=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){L(y)}var p=Pt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u}();function Se(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Te){e:{try{ce(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}U(Se,he);var Pe={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function je(u,p,y,E,V){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=V,this.key=++be,this.da=this.fa=!1}function gt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zn(u){this.src=u,this.g={},this.h=0}Zn.prototype.add=function(u,p,y,E,V){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var Z=Ar(u,p,E,V);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new je(p,this.src,j,!!E,V),p.fa=y,u.push(p)),p};function ts(u,p){var y=p.type;if(y in u.g){var E=u.g[y],V=Array.prototype.indexOf.call(E,p,void 0),j;(j=0<=V)&&Array.prototype.splice.call(E,V,1),j&&(gt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ar(u,p,y,E){for(var V=0;V<u.length;++V){var j=u[V];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==E)return V}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),ns={};function Io(u,p,y,E,V){if(Array.isArray(p)){for(var j=0;j<p.length;j++)Io(u,p[j],y,E,V);return null}return y=Co(y),u&&u[Me]?u.K(p,y,_(E)?!!E.capture:!1,V):So(u,p,y,!1,E,V)}function So(u,p,y,E,V,j){if(!p)throw Error("Invalid event type");var Z=_(V)?!!V.capture:!!V,Fe=is(u);if(Fe||(u[yi]=Fe=new Zn(u)),y=Fe.add(p,y,E,Z,j),y.proxy)return y;if(E=Qa(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(V=Z),V===void 0&&(V=!1),u.addEventListener(p.toString(),E,V);else if(u.attachEvent)u.attachEvent(tr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Qa(){function u(y){return p.call(u.src,u.listener,y)}const p=Ro;return u}function rs(u,p,y,E,V){if(Array.isArray(p))for(var j=0;j<p.length;j++)rs(u,p[j],y,E,V);else E=_(E)?!!E.capture:!!E,y=Co(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(j=u.g[p],y=Ar(j,y,E,V),-1<y&&(gt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[p],u.h--)))):u&&(u=is(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ar(p,y,E,V)),(y=-1<u?p[u]:null)&&er(y))}function er(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])ts(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(tr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=is(p))?(ts(y,u),y.h==0&&(y.src=null,p[yi]=null)):gt(u)}}}function tr(u){return u in ns?ns[u]:ns[u]="on"+u}function Ro(u,p){if(u.da)u=!0;else{p=new Se(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&er(u),u=y.call(E,p)}return u}function is(u){return u=u[yi],u instanceof Zn?u:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(u){return typeof u=="function"?u:(u[ss]||(u[ss]=function(p){return u.handleEvent(p)}),u[ss])}function ut(){W.call(this),this.i=new Zn(this),this.M=this,this.F=null}U(ut,W),ut.prototype[Me]=!0,ut.prototype.removeEventListener=function(u,p,y,E){rs(this,u,p,y,E)};function ct(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var V=p;p=new he(E,u),k(p,V)}if(V=!0,y)for(var j=y.length-1;0<=j;j--){var Z=p.g=y[j];V=nr(Z,E,!0,p)&&V}if(Z=p.g=u,V=nr(Z,E,!0,p)&&V,V=nr(Z,E,!1,p)&&V,y)for(j=0;j<y.length;j++)Z=p.g=y[j],V=nr(Z,E,!1,p)&&V}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)gt(y[E]);delete u.g[p],u.h--}}this.F=null},ut.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ut.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function nr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,j=0;j<p.length;++j){var Z=p[j];if(Z&&!Z.da&&Z.capture==y){var Fe=Z.listener,ht=Z.ha||Z.src;Z.fa&&ts(u.i,Z),V=Fe.call(ht,E)!==!1&&V}}return V&&!E.defaultPrevented}function Ao(u,p,y){if(typeof u=="function")y&&(u=A(u,y));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Pr(u){u.g=Ao(()=>{u.g=null,u.i&&(u.i=!1,Pr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class _i extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Pr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(u){W.call(this),this.h=u,this.g={}}U(vi,W);var Po=[];function ko(u){ve(u.g,function(p,y){this.g.hasOwnProperty(y)&&er(p)},u),u.g={}}vi.prototype.N=function(){vi.aa.N.call(this),ko(this)},vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=f.JSON.stringify,xo=f.JSON.parse,Do=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ei(){}Ei.prototype.h=null;function os(u){return u.h||(u.h=u.i())}function as(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){he.call(this,"d")}U(Vn,he);function ls(){he.call(this,"c")}U(ls,he);var Mn={},Oo=null;function wi(){return Oo=Oo||new ut}Mn.La="serverreachability";function Lo(u){he.call(this,Mn.La,u)}U(Lo,he);function rr(u){const p=wi();ct(p,new Lo(p))}Mn.STAT_EVENT="statevent";function Vo(u,p){he.call(this,Mn.STAT_EVENT,u),this.stat=p}U(Vo,he);function nt(u){const p=wi();ct(p,new Vo(p,u))}Mn.Ma="timingevent";function us(u,p){he.call(this,Mn.Ma,u),this.size=p}U(us,he);function yn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ti(){this.g=!0}Ti.prototype.xa=function(){this.g=!1};function Ii(u,p,y,E,V,j){u.info(function(){if(u.g)if(j)for(var Z="",Fe=j.split("&"),ht=0;ht<Fe.length;ht++){var ke=Fe[ht].split("=");if(1<ke.length){var yt=ke[0];ke=ke[1];var ot=yt.split("_");Z=2<=ot.length&&ot[1]=="type"?Z+(yt+"="+ke+"&"):Z+(yt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+p+`
`+y+`
`+Z})}function cs(u,p,y,E,V,j,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+p+`
`+y+`
`+j+" "+Z})}function _n(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+dc(u,y)+(E?" "+E:"")})}function Mo(u,p){u.info(function(){return"TIMEOUT: "+p})}Ti.prototype.info=function(){};function dc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var j=V[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<V.length;Z++)V[Z]=""}}}}return No(y)}catch{return p}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ya={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function Si(){}U(Si,Ei),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},vn=new Si;function En(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var bo={},ds={};function fs(u,p,y){u.L=1,u.v=Or(en(p)),u.m=y,u.P=!0,Fo(u,null)}function Fo(u,p){u.F=Date.now(),$e(u),u.A=en(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Vr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Xa,u.g=ml(u.j,y?p:null,!u.m),0<u.O&&(u.M=new _i(A(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Po[0]=V.toString()),V=Po);for(var j=0;j<V.length;j++){var Z=Io(y,V[j],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),rr(),Ii(u.i,u.u,u.A,u.l,u.R,u.m)}En.prototype.ca=function(u){u=u.target;const p=this.M;p&&Ht(u)==3?p.j():this.Y(u)},En.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Ht(this.g);var p=this.g.Ba();const cn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||ot!=4||p==7||(p==8||0>=cn?rr(3):rr(2)),Ri(this);var y=this.g.Z();this.X=y;t:if(Ja(this)){var E=Ho(this.g);u="";var V=E.length,j=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),kr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(j&&p==V-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,cs(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ht=this.g;if((Fe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Fe)){var ke=Fe;break t}}ke=null}if(y=ke)_n(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,y);else{this.o=!1,this.s=3,nt(12),ln(this),kr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<Z.length;)if(nn=fc(this,Z),nn==ds){ot==4&&(this.s=4,nt(14),y=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==bo){this.s=4,nt(15),_n(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else _n(this.i,this.l,nn,null),Uo(this,nn);if(Ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||Z.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)_n(this.i,this.l,Z,"[Invalid Chunked Response]"),ln(this),kr(this);else if(0<Z.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),qo(yt),yt.M=!0,nt(11))}}else _n(this.i,this.l,Z,null),Uo(this,Z);ot==4&&ln(this),this.o&&!this.J&&(ot==4?Ss(this.j,this):(this.o=!1,$e(this)))}else vs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),ln(this),kr(this)}}}catch{}finally{}};function Ja(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function fc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?ds:(y=Number(p.substring(y,E)),isNaN(y)?bo:(E+=1,E+y>p.length?ds:(p=p.slice(E,E+y),u.C=E+y,p)))}En.prototype.cancel=function(){this.J=!0,ln(this)};function $e(u){u.S=Date.now()+u.I,Za(u,u.I)}function Za(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=yn(A(u.ba,u),p)}function Ri(u){u.B&&(f.clearTimeout(u.B),u.B=null)}En.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Mo(this.i,this.A),this.L!=2&&(rr(),nt(17)),ln(this),this.s=2,kr(this)):Za(this,this.S-u)};function kr(u){u.j.G==0||u.J||Ss(u.j,u)}function ln(u){Ri(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ko(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Uo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Ft(y.h,u))){if(!u.K&&Ft(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Is(y),Rn(y);else break e;Ts(y),nt(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=yn(A(y.Za,y),6e3));if(1>=tl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else lr(y,11)}else if((u.K||y.g==u)&&Is(y),!X(p))for(V=y.Da.g.parse(p),p=0;p<V.length;p++){let ke=V[p];if(y.T=ke[0],ke=ke[1],y.G==2)if(ke[0]=="c"){y.K=ke[1],y.ia=ke[2];const yt=ke[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const ot=ke[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const cn=ke[5];cn!=null&&typeof cn=="number"&&0<cn&&(E=1.5*cn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const nn=u.g;if(nn){const Di=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var j=E.h;j.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(zo(j,j.h),j.h=null))}if(E.D){const Cs=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Cs&&(E.ya=Cs,ze(E.I,E.D,Cs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=u;if(E.qa=pl(E,E.J?E.ia:null,E.W),Z.K){nl(E.h,Z);var Fe=Z,ht=E.L;ht&&(Fe.I=ht),Fe.B&&(Ri(Fe),$e(Fe)),E.g=Z}else xi(E);0<y.i.length&&zn(y)}else ke[0]!="stop"&&ke[0]!="close"||lr(y,7);else y.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?lr(y,7):It(y):ke[0]!="noop"&&y.l&&y.l.ta(ke),y.v=0)}}rr(4)}catch{}}var el=class{constructor(u,p){this.g=u,this.map=p}};function Ci(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function tl(u){return u.h?1:u.g?u.g.size:0}function Ft(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function zo(u,p){u.g?u.g.add(p):u.h=p}function nl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ci.prototype.cancel=function(){if(this.i=rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function rl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function ps(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function ms(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Nr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=ms(u),E=ps(u),V=E.length,j=0;j<V;j++)p.call(void 0,E[j],y&&y[j],u)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),V=null;if(0<=E){var j=u[y].substring(0,E);V=u[y].substring(E+1)}else j=u[y];p(j,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ir){this.h=u.h,Pi(this,u.j),this.o=u.o,this.g=u.g,xr(this,u.s),this.l=u.l;var p=u.i,y=new bn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Dr(this,y),this.m=u.m}else u&&(p=String(u).match(Ai))?(this.h=!1,Pi(this,p[1]||"",!0),this.o=Ae(p[2]||""),this.g=Ae(p[3]||"",!0),xr(this,p[4]),this.l=Ae(p[5]||"",!0),Dr(this,p[6]||"",!0),this.m=Ae(p[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Lr(p,gs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Lr(p,gs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Lr(y,y.charAt(0)=="/"?ol:sl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Lr(y,Bo)),u.join("")};function en(u){return new ir(u)}function Pi(u,p,y){u.j=y?Ae(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function xr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Dr(u,p,y){p instanceof bn?(u.i=p,Fn(u.i,u.h)):(y||(p=Lr(p,al)),u.i=new bn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Or(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ae(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Lr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,il),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function il(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var gs=/[#\/\?@]/g,sl=/[#\?:]/g,ol=/[#\?]/g,al=/[#\?@]/g,Bo=/#/g;function bn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Tt(u){u.g||(u.g=new Map,u.h=0,u.i&&pc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=bn.prototype,r.add=function(u,p){Tt(this),this.i=null,u=un(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function wn(u,p){Tt(u),p=un(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Tn(u,p){return Tt(u),p=un(u,p),u.g.has(p)}r.forEach=function(u,p){Tt(this),this.g.forEach(function(y,E){y.forEach(function(V){u.call(p,V,E,this)},this)},this)},r.na=function(){Tt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const V=u[E];for(let j=0;j<V.length;j++)y.push(p[E])}return y},r.V=function(u){Tt(this);let p=[];if(typeof u=="string")Tn(this,u)&&(p=p.concat(this.g.get(un(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Tt(this),this.i=null,u=un(this,u),Tn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Vr(u,p,y){wn(u,p),0<y.length&&(u.i=null,u.g.set(un(u,p),$(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const j=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var V=j;Z[E]!==""&&(V+="="+encodeURIComponent(String(Z[E]))),u.push(V)}}return this.i=u.join("&")};function un(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Fn(u,p){p&&!u.j&&(Tt(u),u.i=null,u.g.forEach(function(y,E){var V=E.toLowerCase();E!=V&&(wn(this,E),Vr(this,V,y))},u)),u.j=p}function mc(u,p){const y=new Ti;if(f.Image){const E=new Image;E.onload=F($t,y,"TestLoadImage: loaded",!0,p,E),E.onerror=F($t,y,"TestLoadImage: error",!1,p,E),E.onabort=F($t,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=F($t,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function ll(u,p){const y=new Ti,E=new AbortController,V=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(j=>{clearTimeout(V),j.ok?$t(y,"TestPingServer: ok",!0,p):$t(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),$t(y,"TestPingServer: error",!1,p)})}function $t(u,p,y,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(y)}catch{}}function gc(){this.g=new Do}function ul(u,p,y){const E=y||"";try{Nr(u,function(V,j){let Z=V;_(V)&&(Z=No(V)),p.push(E+j+"="+encodeURIComponent(Z))})}catch(V){throw p.push(E+"type="+encodeURIComponent("_badmap")),V}}function sr(u){this.l=u.Ub||null,this.j=u.eb||!1}U(sr,Ei),sr.prototype.g=function(){return new ki(this.l,this.j)},sr.prototype.i=function(u){return function(){return u}}({});function ki(u,p){ut.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ki,ut),r=ki.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Sn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function cl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?In(this):Sn(this),this.readyState==3&&cl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,In(this))},r.Qa=function(u){this.g&&(this.response=u,In(this))},r.ga=function(){this.g&&In(this)};function In(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Sn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Sn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function or(u){let p="";return ve(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Mr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=or(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Ke(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ke,ut);var yc=/^https?$/i,jo=["POST","PUT"];r=Ke.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?os(this.o):os(vn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){Ni(this,j);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)y.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(jo,p,void 0))||E||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){Ni(this,j)}};function Ni(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,ys(u),tn(u)}function ys(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},r.bb=function(){$o(this)};function $o(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Ht(u)!=4||u.Z()!=2)){if(u.u&&Ht(u)==4)Ao(u.Ea,0,u);else if(ct(u,"readystatechange"),Ht(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=Z===0){var V=String(u.D).match(Ai)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),E=!yc.test(V?V.toLowerCase():"")}y=E}if(y)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var j=2<Ht(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",ys(u)}}finally{tn(u)}}}}function tn(u,p){if(u.g){_s(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ct(u,"ready");try{y.onreadystatechange=E}catch{}}}function _s(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Ht(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),xo(p)}};function Ho(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function vs(u){const p={};u=(u.g&&2<=Ht(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(X(u[E]))continue;var y=D(u[E]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[V]||[];p[V]=j,j.push(y)}N(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Wo(u){this.Aa=0,this.i=[],this.j=new Ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,u),this.cb=Un("retryDelaySeedMs",1e4,u),this.Wa=Un("forwardChannelMaxRetries",2,u),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(u&&u.concurrentRequestLimit),this.Da=new gc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wo.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){nt(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=pl(this,null,this.W),zn(this)};function It(u){if(Es(u),u.G==3){var p=u.U++,y=en(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),ar(u,y),p=new En(u,u.j,p),p.L=2,p.v=Or(en(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=ml(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$e(p)}fl(u)}function Rn(u){u.g&&(qo(u),u.g.cancel(),u.g=null)}function Es(u){Rn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Is(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function zn(u){if(!Zt(u.h)&&!u.s){u.s=!0;var p=u.Ga;Ue||ie(),ee||(Ue(),ee=!0),de.add(p,u),u.B=0}}function _c(u,p){return tl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=yn(A(u.Ga,u,p),dl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new En(this,this.j,u);let j=this.o;if(this.S&&(j?(j=T(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(V.H=j,j=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=br(this,V,p),y=en(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),ar(this,y),j&&(this.O?p="headers="+encodeURIComponent(String(or(j)))+"&"+p:this.m&&Mr(y,this.m,j)),zo(this.h,V),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),V.T=!0,fs(V,y,null)):fs(V,y,p),this.G=2}}else this.G==3&&(u?ws(this,u):this.i.length==0||Zt(this.h)||ws(this))};function ws(u,p){var y;p?y=p.l:y=u.U++;const E=en(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),ar(u,E),u.m&&u.o&&Mr(E,u.m,u.o),y=new En(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=br(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),zo(u.h,y),fs(y,E,p)}function ar(u,p){u.H&&ve(u.H,function(y,E){ze(p,E,y)}),u.l&&Nr({},function(y,E){ze(p,E,y)})}function br(u,p,y){y=Math.min(u.i.length,y);var E=u.l?A(u.l.Na,u.l,u):null;e:{var V=u.i;let j=-1;for(;;){const Z=["count="+y];j==-1?0<y?(j=V[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let Fe=!0;for(let ht=0;ht<y;ht++){let ke=V[ht].g;const yt=V[ht].map;if(ke-=j,0>ke)j=Math.max(0,V[ht].g-100),Fe=!1;else try{ul(yt,Z,"req"+ke+"_")}catch{E&&E(yt)}}if(Fe){E=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function xi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Ue||ie(),ee||(Ue(),ee=!0),de.add(p,u),u.v=0}}function Ts(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=yn(A(u.Fa,u),dl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,hl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=yn(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Rn(this),hl(this))};function qo(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function hl(u){u.g=new En(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=en(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),ar(u,p),u.m&&u.o&&Mr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Or(en(p)),y.m=null,y.P=!0,Fo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Rn(this),Ts(this),nt(19))};function Is(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ss(u,p){var y=null;if(u.g==p){Is(u),qo(u),u.g=null;var E=2}else if(Ft(u.h,p))y=p.D,nl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;E=wi(),ct(E,new us(E,y)),zn(u)}else xi(u);else if(V=p.s,V==3||V==0&&0<p.X||!(E==1&&_c(u,p)||E==2&&Ts(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),V){case 1:lr(u,5);break;case 4:lr(u,10);break;case 3:lr(u,6);break;default:lr(u,2)}}}function dl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function lr(u,p){if(u.j.info("Error code "+p),p==2){var y=A(u.fb,u),E=u.Xa;const V=!E;E=new ir(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Pi(E,"https"),Or(E),V?mc(E.toString(),y):ll(E.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(p),fl(u),Es(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function fl(u){if(u.G=0,u.ka=[],u.l){const p=rl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function pl(u,p,y){var E=y instanceof ir?en(y):new ir(y);if(E.g!="")p&&(E.g=p+"."+E.g),xr(E,E.s);else{var V=f.location;E=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var j=new ir(null);E&&Pi(j,E),p&&(j.g=p),V&&xr(j,V),y&&(j.l=y),E=j}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),ar(u,E),E}function ml(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ke(new sr({eb:y})):new Ke(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}r=Ko.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Rs(){}Rs.prototype.g=function(u,p){return new Ut(u,p)};function Ut(u,p){ut.call(this),this.g=new Wo(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!X(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!X(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Bn(this)}U(Ut,ut),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){It(this.g)},Ut.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=No(u),u=y);p.i.push(new el(p.Ya++,u)),p.G==3&&zn(p)},Ut.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,Ut.aa.N.call(this)};function gl(u){Vn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}U(gl,Vn);function yl(){ls.call(this),this.status=1}U(yl,ls);function Bn(u){this.g=u}U(Bn,Ko),Bn.prototype.ua=function(){ct(this.g,"a")},Bn.prototype.ta=function(u){ct(this.g,new gl(u))},Bn.prototype.sa=function(u){ct(this.g,new yl)},Bn.prototype.ra=function(){ct(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Jy=function(){return new Rs},Xy=function(){return wi()},Yy=Mn,dd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Iu=hs,Ya.COMPLETE="complete",Qy=Ya,as.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ta=as,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Gy=Ke}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const cg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Dd("@firebase/firestore");function Ks(){return Ji.logLevel}function se(r,...e){if(Ji.logLevel<=Ce.DEBUG){const t=e.map(Hd);Ji.debug(`Firestore (${go}): ${r}`,...t)}}function Sr(r,...e){if(Ji.logLevel<=Ce.ERROR){const t=e.map(Hd);Ji.error(`Firestore (${go}): ${r}`,...t)}}function oo(r,...e){if(Ji.logLevel<=Ce.WARN){const t=e.map(Hd);Ji.warn(`Firestore (${go}): ${r}`,...t)}}function Hd(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+r;throw Sr(e),new Error(e)}function Je(r,e){r||we()}function De(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Vt.UNAUTHENTICATED))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pS{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Gi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Gi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string"),new Zy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new Vt(e)}}class mS{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class gS{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new mS(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _S{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Je(this.o===void 0);const s=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Je(typeof t.token=="string"),this.R=t.token,new yS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=vS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function ao(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static now(){return Jt.fromMillis(Date.now())}static fromDate(e){return Jt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Jt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new me(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Jt(0,0))}static max(){return new Ee(new Jt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(),s===void 0?s=e.length-t:s>e.length-t&&we(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Oa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class et extends Oa{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new et(t)}static emptyPath(){return new et([])}}const wS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Oa{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return wS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new me(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new me(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new me(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new me(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(et.fromString(e))}static fromName(e){return new ye(et.fromString(e).popFirst(5))}static empty(){return new ye(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new et(e.slice()))}}function TS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Jt(t+1,0):new Jt(t,s));return new ui(o,ye.empty(),e)}function IS(r){return new ui(r.readTime,r.key,-1)}class ui{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ui(Ee.min(),ye.empty(),-1)}static max(){return new ui(Ee.max(),ye.empty(),-1)}}function SS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==RS)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,s)=>{t(e)})}static reject(e){return new q((t,s)=>{s(e)})}static waitFor(e){return new q((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next(o=>o?q.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new q((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++f,f===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new q((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function AS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Zu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zu.oe=-1;function ec(r){return r==null}function fd(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=hg(e)),e=kS(r.get(t),e);return hg(e)}function kS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function hg(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function $a(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function NS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}}class fu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fg(this.data.getIterator())}getIteratorFrom(e){return new fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ri{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new ri([])}unionWith(e){let t=new mt(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ri(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new e_("Invalid base64 string: "+l):l}}(e);return new At(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const xS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(r){if(Je(!!r),typeof r=="string"){let e=0;const t=xS.exec(r);if(Je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function hi(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
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
 */function Wd(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function tc(r){const e=r.mapValue.fields.__previous_value__;return Wd(e)?tc(e):e}function La(r){const e=ci(r.mapValue.fields.__local_write_time__.timestampValue);return new Jt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t,s,o,l,h,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class Va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wd(r)?4:LS(r)?9007199254740991:OS(r)?10:11:we()}function Yn(r,e){if(r===e)return!0;const t=di(r);if(t!==di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return La(r).isEqual(La(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=ci(o.timestampValue),f=ci(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return hi(o.bytesValue).isEqual(hi(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),f=it(l.doubleValue);return h===f?fd(h)===fd(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return ao(r.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(dg(h)!==dg(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!Yn(h[g],f[g])))return!1;return!0}(r,e);default:return we()}}function Ma(r,e){return(r.values||[]).find(t=>Yn(t,e))!==void 0}function lo(r,e){if(r===e)return 0;const t=di(r),s=di(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return pg(r.timestampValue,e.timestampValue);case 4:return pg(La(r),La(e));case 5:return xe(r.stringValue,e.stringValue);case 6:return function(l,h){const f=hi(l),g=hi(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=xe(f[_],g[_]);if(w!==0)return w}return xe(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=xe(it(l.latitude),it(h.latitude));return f!==0?f:xe(it(l.longitude),it(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return mg(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,_,w;const C=l.fields||{},A=h.fields||{},F=(f=C.value)===null||f===void 0?void 0:f.arrayValue,U=(g=A.value)===null||g===void 0?void 0:g.arrayValue,$=xe(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((w=U==null?void 0:U.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:mg(F,U)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===pu.mapValue&&h===pu.mapValue)return 0;if(l===pu.mapValue)return 1;if(h===pu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let C=0;C<g.length&&C<w.length;++C){const A=xe(g[C],w[C]);if(A!==0)return A;const F=lo(f[g[C]],_[w[C]]);if(F!==0)return F}return xe(g.length,w.length)}(r.mapValue,e.mapValue);default:throw we()}}function pg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=ci(r),s=ci(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function mg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=lo(t[o],s[o]);if(l)return l}return xe(t.length,s.length)}function uo(r){return pd(r)}function pd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=ci(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return hi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=pd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${pd(t.fields[h])}`;return o+"}"}(r.mapValue):we()}function Su(r){switch(di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tc(r);return e?16+Su(e):16;case 5:return 2*r.stringValue.length;case 6:return hi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Su(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return $a(s.fields,(l,h)=>{o+=l.length+Su(h)}),o}(r.mapValue);default:throw we()}}function md(r){return!!r&&"integerValue"in r}function qd(r){return!!r&&"arrayValue"in r}function gg(r){return!!r&&"nullValue"in r}function yg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Yh(r){return!!r&&"mapValue"in r}function OS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ca(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return $a(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ca(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ca(r.arrayValue.values[t]);return e}return Object.assign({},r)}function LS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.value=e}static empty(){return new qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Yh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(t)}setAll(e){let t=jt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ca(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Yh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Yh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){$a(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new qn(Ca(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Mt(e,0,Ee.min(),Ee.min(),Ee.min(),qn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,Ee.min(),Ee.min(),qn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,Ee.min(),Ee.min(),qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fu{constructor(e,t){this.position=e,this.inclusive=t}}function _g(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=lo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function vg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Yn(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Uu{constructor(e,t="asc"){this.field=e,this.dir=t}}function VS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class t_{}class pt extends t_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new bS(e,t,s):t==="array-contains"?new zS(e,s):t==="in"?new BS(e,s):t==="not-in"?new jS(e,s):t==="array-contains-any"?new $S(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new FS(e,s):new US(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(lo(t,this.value)):t!==null&&di(this.value)===di(t)&&this.matchesComparison(lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends t_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Xn(e,t)}matches(e){return n_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function n_(r){return r.op==="and"}function r_(r){return MS(r)&&n_(r)}function MS(r){for(const e of r.filters)if(e instanceof Xn)return!1;return!0}function gd(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+uo(r.value);if(r_(r))return r.filters.map(e=>gd(e)).join(",");{const e=r.filters.map(t=>gd(t)).join(",");return`${r.op}(${e})`}}function i_(r,e){return r instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&Yn(s.value,o.value)}(r,e):r instanceof Xn?function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&i_(h,o.filters[f]),!0):!1}(r,e):void we()}function s_(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${uo(t.value)}`}(r):r instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map(s_).join(" ,")+"}"}(r):"Filter"}class bS extends pt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class FS extends pt{constructor(e,t){super(e,"in",t),this.keys=o_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class US extends pt{constructor(e,t){super(e,"not-in",t),this.keys=o_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function o_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class zS extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&Ma(t.arrayValue,this.value)}}class BS extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ma(this.value.arrayValue,t)}}class jS extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ma(this.value.arrayValue,t)}}class $S extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ma(this.value.arrayValue,s))}}/**
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
 */class HS{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function Eg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new HS(r,e,t,s,o,l,h)}function Kd(r){const e=De(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>gd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>uo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>uo(s)).join(",")),e.ue=t}return e.ue}function Gd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!VS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!i_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!vg(r.startAt,e.startAt)&&vg(r.endAt,e.endAt)}function yd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WS(r,e,t,s,o,l,h,f){return new nc(r,e,t,s,o,l,h,f)}function a_(r){return new nc(r)}function wg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qS(r){return r.collectionGroup!==null}function Aa(r){const e=De(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new mt(jt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Uu(l,s))}),t.has(jt.keyField().canonicalString())||e.ce.push(new Uu(jt.keyField(),s))}return e.ce}function Qn(r){const e=De(r);return e.le||(e.le=KS(e,Aa(r))),e.le}function KS(r,e){if(r.limitType==="F")return Eg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Uu(o.field,l)});const t=r.endAt?new Fu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Fu(r.startAt.position,r.startAt.inclusive):null;return Eg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function _d(r,e,t){return new nc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function rc(r,e){return Gd(Qn(r),Qn(e))&&r.limitType===e.limitType}function l_(r){return`${Kd(Qn(r))}|lt:${r.limitType}`}function Gs(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>s_(o)).join(", ")}]`),ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>uo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>uo(o)).join(",")),`Target(${s})`}(Qn(r))}; limitType=${r.limitType})`}function ic(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of Aa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const _=_g(h,f,g);return h.inclusive?_<=0:_<0}(s.startAt,Aa(s),o)||s.endAt&&!function(h,f,g){const _=_g(h,f,g);return h.inclusive?_>=0:_>0}(s.endAt,Aa(s),o))}(r,e)}function GS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function u_(r){return(e,t)=>{let s=!1;for(const o of Aa(r)){const l=QS(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function QS(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?lo(g,_):we()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$a(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return NS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new st(ye.comparator);function fi(){return YS}const c_=new st(ye.comparator);function Ia(...r){let e=c_;for(const t of r)e=e.insert(t.key,t);return e}function XS(r){let e=c_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function qi(){return Pa()}function h_(){return Pa()}function Pa(){return new es(r=>r.toString(),(r,e)=>r.isEqual(e))}const JS=new mt(ye.comparator);function Le(...r){let e=JS;for(const t of r)e=e.add(t);return e}const ZS=new mt(xe);function e0(){return ZS}/**
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
 */function t0(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fd(e)?"-0":e}}function n0(r){return{integerValue:""+r}}/**
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
 */class sc{constructor(){this._=void 0}}function r0(r,e,t){return r instanceof vd?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Wd(l)&&(l=tc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof zu?d_(r,e):r instanceof Bu?f_(r,e):function(o,l){const h=s0(o,l),f=Tg(h)+Tg(o.Pe);return md(h)&&md(o.Pe)?n0(f):t0(o.serializer,f)}(r,e)}function i0(r,e,t){return r instanceof zu?d_(r,e):r instanceof Bu?f_(r,e):t}function s0(r,e){return r instanceof Ed?function(s){return md(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class vd extends sc{}class zu extends sc{constructor(e){super(),this.elements=e}}function d_(r,e){const t=p_(e);for(const s of r.elements)t.some(o=>Yn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Bu extends sc{constructor(e){super(),this.elements=e}}function f_(r,e){let t=p_(e);for(const s of r.elements)t=t.filter(o=>!Yn(o,s));return{arrayValue:{values:t}}}class Ed extends sc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Tg(r){return it(r.integerValue||r.doubleValue)}function p_(r){return qd(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function o0(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof zu&&o instanceof zu||s instanceof Bu&&o instanceof Bu?ao(s.elements,o.elements,Yn):s instanceof Ed&&o instanceof Ed?Yn(s.Pe,o.Pe):s instanceof vd&&o instanceof vd}(r.transform,e.transform)}class Qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qi}static exists(e){return new Qi(void 0,e)}static updateTime(e){return new Qi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Qd{}function m_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new l0(r.key,Qi.none()):new Yd(r.key,r.data,Qi.none());{const t=r.data,s=qn.empty();let o=new mt(jt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new oc(r.key,s,new ri(o.toArray()),Qi.none())}}function a0(r,e,t){r instanceof Yd?function(o,l,h){const f=o.value.clone(),g=Sg(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof oc?function(o,l,h){if(!Ru(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Sg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(g_(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ka(r,e,t,s){return r instanceof Yd?function(l,h,f,g){if(!Ru(l.precondition,h))return f;const _=l.value.clone(),w=Rg(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof oc?function(l,h,f,g){if(!Ru(l.precondition,h))return f;const _=Rg(l.fieldTransforms,g,h),w=h.data;return w.setAll(g_(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(C=>C.field))}(r,e,t,s):function(l,h,f){return Ru(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function Ig(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ao(s,o,(l,h)=>o0(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Yd extends Qd{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class oc extends Qd{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function g_(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Sg(r,e,t){const s=new Map;Je(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,i0(h,f,t[o]))}return s}function Rg(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,r0(l,h,e))}return s}class l0 extends Qd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&a0(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=h_();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=m_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(t,s)=>Ig(t,s))&&ao(this.baseMutations,e.baseMutations,(t,s)=>Ig(t,s))}}/**
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
 */class c0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Ne;function y_(r){if(r===void 0)return Sr("GRPC error has no .code"),te.UNKNOWN;switch(r){case lt.OK:return te.OK;case lt.CANCELLED:return te.CANCELLED;case lt.UNKNOWN:return te.UNKNOWN;case lt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case lt.INTERNAL:return te.INTERNAL;case lt.UNAVAILABLE:return te.UNAVAILABLE;case lt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case lt.NOT_FOUND:return te.NOT_FOUND;case lt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case lt.ABORTED:return te.ABORTED;case lt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case lt.DATA_LOSS:return te.DATA_LOSS;default:return we()}}(Ne=lt||(lt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d0(){return new TextEncoder}/**
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
 */const f0=new Ki([4294967295,4294967295],0);function Cg(r){const e=d0().encode(r),t=new Ky;return t.update(e),new Uint8Array(t.digest())}function Ag(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ki([t,s],0),new Ki([o,l],0)]}class Xd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(s<0)throw new Sa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ki.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Ki.fromNumber(s)));return o.compare(f0)===1&&(o=new Ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Cg(e),[s,o]=Ag(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Xd(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=Cg(e),[s,o]=Ag(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ac(Ee.min(),o,new st(xe),fi(),Le())}}class Ha{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ha(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class __{constructor(e,t){this.targetId=e,this.me=t}}class v_{constructor(e,t,s=At.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Pg{constructor(){this.fe=0,this.ge=kg(),this.pe=At.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Le(),t=Le(),s=Le();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we()}}),new Ha(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=kg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class p0{constructor(e){this.Le=e,this.Be=new Map,this.ke=fi(),this.qe=mu(),this.Qe=mu(),this.Ke=new st(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(yd(l))if(s===0){const h=new ye(l.path);this.We(t,h,Mt.newNoDocument(h,Ee.min()))}else Je(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),g=f?this.et(f,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=hi(s).toUint8Array()}catch(g){if(g instanceof e_)return oo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Xd(h,o,l)}catch(g){return oo(g instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&yd(f.target)){const g=new ye(f.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Mt.newNoDocument(g,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=Le();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new ac(e,t,this.Ke,this.ke,s);return this.ke=fi(),this.qe=mu(),this.Qe=mu(),this.Ke=new st(xe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Pg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Pg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function mu(){return new st(ye.comparator)}function kg(){return new st(ye.comparator)}const m0={asc:"ASCENDING",desc:"DESCENDING"},g0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y0={and:"AND",or:"OR"};class _0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wd(r,e){return r.useProto3Json||ec(e)?e:{value:e}}function v0(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function to(r){return Je(!!r),Ee.fromTimestamp(function(t){const s=ci(t);return new Jt(s.seconds,s.nanos)}(r))}function w0(r,e){return Td(r,e).canonicalString()}function Td(r,e){const t=function(o){return new et(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function E_(r){const e=et.fromString(r);return Je(R_(e)),e}function Xh(r,e){const t=E_(e);if(t.get(1)!==r.databaseId.projectId)throw new me(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new me(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(T_(t))}function w_(r,e){return w0(r.databaseId,e)}function T0(r){const e=E_(r);return e.length===4?et.emptyPath():T_(e)}function Ng(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function T_(r){return Je(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function I0(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,w){return _.useProto3Json?(Je(w===void 0||typeof w=="string"),At.fromBase64String(w||"")):(Je(w===void 0||w instanceof Buffer||w instanceof Uint8Array),At.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(_){const w=_.code===void 0?te.UNKNOWN:y_(_.code);return new me(w,_.message||"")}(h);t=new v_(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Xh(r,s.document.name),l=to(s.document.updateTime),h=s.document.createTime?to(s.document.createTime):Ee.min(),f=new qn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,l,h,f),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Cu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Xh(r,s.document),l=s.readTime?to(s.readTime):Ee.min(),h=Mt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Cu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Xh(r,s.document),l=s.removedTargetIds||[];t=new Cu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new h0(o,l),f=s.targetId;t=new __(f,h)}}return t}function S0(r,e){return{documents:[w_(r,e.path)]}}function R0(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=w_(r,o);const l=function(_){if(_.length!==0)return S_(Xn.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(w=>function(A){return{field:Qs(A.field),direction:P0(A.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=wd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function C0(r){let e=T0(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Je(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(C){const A=I_(C);return A instanceof Xn&&r_(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(A=>function(U){return new Uu(Ys(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(C){let A;return A=typeof C=="object"?C.value:C,ec(A)?null:A}(t.limit));let g=null;t.startAt&&(g=function(C){const A=!!C.before,F=C.values||[];return new Fu(F,A)}(t.startAt));let _=null;return t.endAt&&(_=function(C){const A=!C.before,F=C.values||[];return new Fu(F,A)}(t.endAt)),WS(e,o,h,l,f,"F",g,_)}function A0(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function I_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ys(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(r):r.fieldFilter!==void 0?function(t){return pt.create(Ys(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(s=>I_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(r):we()}function P0(r){return m0[r]}function k0(r){return g0[r]}function N0(r){return y0[r]}function Qs(r){return{fieldPath:r.canonicalString()}}function Ys(r){return jt.fromServerFormat(r.fieldPath)}function S_(r){return r instanceof pt?function(t){if(t.op==="=="){if(yg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(gg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(gg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:k0(t.op),value:t.value}}}(r):r instanceof Xn?function(t){const s=t.getFilters().map(o=>S_(o));return s.length===1?s[0]:{compositeFilter:{op:N0(t.op),filters:s}}}(r):we()}function R_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,o,l=Ee.min(),h=Ee.min(),f=At.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.ht=e}}function D0(r){const e=C0({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
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
 */class O0{constructor(){this.ln=new L0}addToCollectionParentIndex(e,t){return this.ln.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(ui.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class L0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(et.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(et.comparator)).toArray()}}/**
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
 */const xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new co(0)}static Qn(){return new co(-1)}}/**
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
 */function Dg([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class V0{constructor(e){this.Gn=e,this.buffer=new mt(Dg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Dg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class M0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yo(t)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ju(t)}await this.Yn(3e5)})}}class b0{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Zu.oe);const s=new V0(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(xg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,f=Date.now(),this.removeTargets(e,s,t))).next(C=>(l=C,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(_=Date.now(),Ks()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${C} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:C})))}}function F0(r,e){return new b0(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.changes=new es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ka(s.mutation,o,ri.empty(),Jt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=qi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Ia();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=qi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=fi();const h=Pa(),f=function(){return Pa()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof oc)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ka(w.mutation,_,w.mutation.getFieldMask(),Jt.now())):h.set(_.key,ri.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var C;return f.set(_,new z0(w,(C=h.get(_))!==null&&C!==void 0?C:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new st((h,f)=>h-f),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||ri.empty();w=f.applyToLocalView(_,w),s.set(g,w);const C=(o.get(f.batchId)||Le()).add(g);o=o.insert(f.batchId,C)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,C=h_();w.forEach(A=>{if(!l.has(A)){const F=m_(t.get(A),s.get(A));F!==null&&C.set(A,F),l=l.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,C))}return q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(qi());let f=-1,g=l;return h.next(_=>q.forEach(_,(w,C)=>(f<C.largestBatchId&&(f=C.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next(A=>{g=g.insert(w,A)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,g,_,Le())).next(w=>({batchId:f,changes:XS(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Ia();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ia();return this.indexManager.getCollectionParents(e,l).next(f=>q.forEach(f,g=>{const _=function(C,A){return new nc(A,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((C,A)=>{h=h.insert(C,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let f=Ia();return h.forEach((g,_)=>{const w=l.get(g);w!==void 0&&ka(w.mutation,_,ri.empty(),Jt.now()),ic(t,_)&&(f=f.insert(g,_))}),f})}}/**
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
 */class j0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:to(o.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:D0(o.bundledQuery),readTime:to(o.readTime)}}(t)),q.resolve()}}/**
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
 */class $0{constructor(){this.overlays=new st(ye.comparator),this.Er=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=qi();return q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Tt(e,t,l)}),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=qi(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new st((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=qi(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=qi(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>f.set(_,w)),!(f.size()>=o)););return q.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new c0(t,s));let l=this.Er.get(t);l===void 0&&(l=Le(),this.Er.set(t,l)),this.Er.set(t,l.add(s.key))}}/**
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
 */class H0{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.dr=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ye(new et([])),s=new wt(t,e),o=new wt(t,e+1),l=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new et([])),s=new wt(t,e),o=new wt(t,e+1);let l=Le();return this.Rr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new wt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new u0(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new wt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);l.push(f)}),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(xe);return t.forEach(o=>{const l=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{s=s.add(f.br)})}),q.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const h=new wt(new ye(l),0);let f=new mt(xe);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.br)),!0)},h),q.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return q.forEach(t.mutations,o=>{const l=new wt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.Nr=e,this.docs=function(){return new st(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=fi();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Mt.newInvalidDocument(o))}),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=fi();const h=t.path,f=new ye(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||SS(IS(w),s)<=0||(o.has(w.key)||ic(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we()}Lr(e,t){return q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new K0(this)}getSize(e){return q.resolve(this.size)}}class K0 extends U0{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.persistence=e,this.Br=new es(t=>Kd(t),Gd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new Jd,this.targetCount=0,this.Qr=co.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),q.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new co(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Un(t),q.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),q.waitFor(l).next(()=>o)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Zu(0),this.Ur=!1,this.Ur=!0,this.Wr=new H0,this.referenceDelegate=e(this),this.Gr=new G0(this),this.indexManager=new O0,this.remoteDocumentCache=function(o){return new q0(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new x0(t),this.jr=new j0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new W0(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new Q0(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return q.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class Q0 extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class Zd{constructor(e){this.persistence=e,this.Zr=new Jd,this.Xr=null}static ei(e){return new Zd(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ti,s=>{const o=ye.fromPath(s);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return q.or([()=>q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.ri=new es(s=>PS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=F0(this,t)}static ei(e,t){return new ju(e,t)}Hr(){}Jr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return q.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(l=>l?q.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,l.removeEntry(h,Ee.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Su(e.data.value)),t}ir(e,t,s){return q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Le(),o=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new ef(e,t.fromCache,s,o)}}/**
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
 */class Y0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class X0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ME()?8:AS(bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new Y0;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Ks()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),q.resolve()):(Ks()<=Ce.DEBUG&&se("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Ks()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):q.resolve())}Xi(e,t){if(wg(t))return q.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=_d(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=Le(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,f);return this.ss(t,_,h,g.readTime)?this.Xi(e,_d(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return wg(t)||o.isEqual(Ee.min())?q.resolve(null):this.Zi.getDocuments(e,s).next(l=>{const h=this.rs(t,l);return this.ss(t,h,s,o)?q.resolve(null):(Ks()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.os(e,h,t,TS(o,-1)).next(f=>f))})}rs(e,t){let s=new mt(u_(e));return t.forEach((o,l)=>{ic(e,l)&&(s=s.add(l))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,s){return Ks()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Zi.getDocumentsMatchingQuery(e,t,ui.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class J0{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new st(xe),this.cs=new es(l=>Kd(l),Gd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B0(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Z0(r,e,t,s){return new J0(r,e,t,s)}async function A_(r,e){const t=De(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let g=Le();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:f}))})})}function P_(r){const e=De(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function eR(r,e){const t=De(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((w,C)=>{const A=o.get(C);if(!A)return;f.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,C).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,C)));let F=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(C)!==null?F=F.withResumeToken(At.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,s)),o=o.insert(C,F),function($,B,K){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(A,F,w)&&f.push(t.Gr.updateTargetData(l,F))});let g=fi(),_=Le();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(tR(l,h,e.documentUpdates).next(w=>{g=w.Is,_=w.Es})),!s.isEqual(Ee.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(C=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(w)}return q.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,_)).next(()=>g)}).then(l=>(t.us=o,l))}function tR(r,e,t){let s=Le(),o=Le();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=fi();return t.forEach((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)}),{Is:h,Es:o}})}function nR(r,e){const t=De(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(l=>l?(o=l,q.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Id(r,e,t){const s=De(r),o=s.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!yo(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Og(r,e,t){const s=De(r);let o=Ee.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const C=De(g),A=C.cs.get(w);return A!==void 0?q.resolve(C.us.get(A)):C.Gr.getTargetData(_,w)}(s,h,Qn(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Le())).next(f=>(rR(s,GS(e),f),{documents:f,ds:l})))}function rR(r,e,t){let s=r.ls.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.ls.set(e,s)}class Lg{constructor(){this.activeTargetIds=e0()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iR{constructor(){this._o=new Lg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Lg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sR{uo(e){}shutdown(){}}/**
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
 */class Vg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gu=null;function Jh(){return gu===null?gu=function(){return 268435456+Math.round(2147483648*Math.random())}():gu++,"0x"+gu.toString(16)}/**
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
 */const oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class lR extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,s,o,l,h){const f=Jh(),g=this.No(t,s.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,l,h),this.Bo(t,g,_,o).then(w=>(se("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw oo("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,l,h,f){return this.Oo(t,s,o,l,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,s){const o=oR[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const l=Jh();return new Promise((h,f)=>{const g=new Gy;g.setWithCredentials(!0),g.listenOnce(Qy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Iu.NO_ERROR:const w=g.getResponseJson();se(Lt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Iu.TIMEOUT:se(Lt,`RPC '${e}' ${l} timed out`),f(new me(te.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const C=g.getStatus();if(se(Lt,`RPC '${e}' ${l} failed with status:`,C,"response text:",g.getResponseText()),C>0){let A=g.getResponseJson();Array.isArray(A)&&(A=A[0]);const F=A==null?void 0:A.error;if(F&&F.status&&F.message){const U=function(B){const K=B.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(K)>=0?K:te.UNKNOWN}(F.status);f(new me(U,F.message))}else f(new me(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new me(te.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{se(Lt,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(o);se(Lt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=Jh(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Jy(),f=Xy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");se(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const C=h.createWebChannel(w,g);let A=!1,F=!1;const U=new aR({Eo:B=>{F?se(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(A||(se(Lt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),A=!0),se(Lt,`RPC '${e}' stream ${o} sending:`,B),C.send(B))},Ao:()=>C.close()}),$=(B,K,X)=>{B.listen(K,re=>{try{X(re)}catch(ce){setTimeout(()=>{throw ce},0)}})};return $(C,Ta.EventType.OPEN,()=>{F||(se(Lt,`RPC '${e}' stream ${o} transport opened.`),U.So())}),$(C,Ta.EventType.CLOSE,()=>{F||(F=!0,se(Lt,`RPC '${e}' stream ${o} transport closed`),U.Do())}),$(C,Ta.EventType.ERROR,B=>{F||(F=!0,oo(Lt,`RPC '${e}' stream ${o} transport errored:`,B),U.Do(new me(te.UNAVAILABLE,"The operation could not be completed")))}),$(C,Ta.EventType.MESSAGE,B=>{var K;if(!F){const X=B.data[0];Je(!!X);const re=X,ce=(re==null?void 0:re.error)||((K=re[0])===null||K===void 0?void 0:K.error);if(ce){se(Lt,`RPC '${e}' stream ${o} received error:`,ce);const Te=ce.status;let ve=function(S){const k=lt[S];if(k!==void 0)return y_(k)}(Te),N=ce.message;ve===void 0&&(ve=te.INTERNAL,N="Unknown error status: "+Te+" with message "+ce.message),F=!0,U.Do(new me(ve,N)),C.close()}else se(Lt,`RPC '${e}' stream ${o} received:`,X),U.vo(X)}}),$(f,Yy.STAT_EVENT,B=>{B.stat===dd.PROXY?se(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===dd.NOPROXY&&se(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.bo()},0),U}}function Zh(){return typeof document<"u"?document:null}/**
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
 */function k_(r){return new _0(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,t,s,o,l,h,f,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new N_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new me(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends uR{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=I0(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?to(h.readTime):Ee.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Ng(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=yd(g)?{documents:S0(l,g)}:{query:R0(l,g).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=E0(l,h.resumeToken);const _=wd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=v0(l,h.snapshotVersion.toTimestamp());const _=wd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,e);const s=A0(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Ng(this.serializer),t.removeTarget=e,this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new me(te.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Td(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new me(te.UNKNOWN,l.toString())})}ko(e,t,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Td(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new me(te.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class dR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Sr(t),this.C_=!1):se("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{qa(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=De(g);_.k_.add(4),await Wa(_),_.K_.set("Unknown"),_.k_.delete(4),await lc(_)}(this))})}),this.K_=new dR(s,o)}}async function lc(r){if(qa(r))for(const e of r.q_)await e(!0)}async function Wa(r){for(const e of r.q_)await e(!1)}function x_(r,e){const t=De(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),sf(t)?rf(t):_o(t).s_()&&nf(t,e))}function tf(r,e){const t=De(r),s=_o(t);t.B_.delete(e),s.s_()&&D_(t,e),t.B_.size===0&&(s.s_()?s.a_():qa(t)&&t.K_.set("Unknown"))}function nf(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_o(r).V_(e)}function D_(r,e){r.U_.xe(e),_o(r).m_(e)}function rf(r){r.U_=new p0({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),_o(r).start(),r.K_.F_()}function sf(r){return qa(r)&&!_o(r).i_()&&r.B_.size>0}function qa(r){return De(r).k_.size===0}function O_(r){r.U_=void 0}async function pR(r){r.K_.set("Online")}async function mR(r){r.B_.forEach((e,t)=>{nf(r,e)})}async function gR(r,e){O_(r),sf(r)?(r.K_.O_(e),rf(r)):r.K_.set("Unknown")}async function yR(r,e,t){if(r.K_.set("Online"),e instanceof v_&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mg(r,s)}else if(e instanceof Cu?r.U_.$e(e):e instanceof __?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(Ee.min()))try{const s=await P_(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.B_.get(_);w&&l.B_.set(_,w.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,_)=>{const w=l.B_.get(g);if(!w)return;l.B_.set(g,w.withResumeToken(At.EMPTY_BYTE_STRING,w.snapshotVersion)),D_(l,g);const C=new ii(w.target,g,_,w.sequenceNumber);nf(l,C)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await Mg(r,s)}}async function Mg(r,e,t){if(!yo(e))throw e;r.k_.add(1),await Wa(r),r.K_.set("Offline"),t||(t=()=>P_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await lc(r)})}async function bg(r,e){const t=De(r);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=qa(t);t.k_.add(3),await Wa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await lc(t)}async function _R(r,e){const t=De(r);e?(t.k_.delete(2),await lc(t)):e||(t.k_.add(2),await Wa(t),t.K_.set("Unknown"))}function _o(r){return r.W_||(r.W_=function(t,s,o){const l=De(t);return l.b_(),new cR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:pR.bind(null,r),mo:mR.bind(null,r),po:gR.bind(null,r),R_:yR.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),sf(r)?rf(r):r.K_.set("Unknown")):(await r.W_.stop(),O_(r))})),r.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new of(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function L_(r,e){if(Sr("AsyncQueue",`${e}: ${r}`),yo(r))return new me(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Ia(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.z_=new st(ye.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ho{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new ho(e,t,no.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class ER{constructor(){this.queries=Ug(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=De(t),l=o.queries;o.queries=Ug(),l.forEach((h,f)=>{for(const g of f.J_)g.onError(s)})})(this,new me(te.ABORTED,"Firestore shutting down"))}}function Ug(){return new es(r=>l_(r),rc)}async function wR(r,e){const t=De(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(s=2):(l=new vR,s=e.Z_()?0:1);try{switch(s){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=L_(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&af(t)}async function TR(r,e){const t=De(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function IR(r,e){const t=De(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&af(t)}function SR(r,e,t){const s=De(r),o=s.queries.get(e);if(o)for(const l of o.J_)l.onError(t);s.queries.delete(e)}function af(r){r.X_.forEach(e=>{e.next()})}var Sd,zg;(zg=Sd||(Sd={})).na="default",zg.Cache="cache";class RR{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ho(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.key=e}}class M_{constructor(e){this.key=e}}class CR{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Le(),this.mutatedKeys=Le(),this.Va=u_(e),this.ma=new no(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Fg,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const A=o.get(w),F=ic(this.query,C)?C:null,U=!!A&&this.mutatedKeys.has(A.key),$=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let B=!1;A&&F?A.data.isEqual(F.data)?U!==$&&(s.track({type:3,doc:F}),B=!0):this.ya(A,F)||(s.track({type:2,doc:F}),B=!0,(g&&this.Va(F,g)>0||_&&this.Va(F,_)<0)&&(f=!0)):!A&&F?(s.track({type:0,doc:F}),B=!0):A&&!F&&(s.track({type:1,doc:A}),B=!0,(g||_)&&(f=!0)),B&&(F?(h=h.add(F),l=$?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,C)=>function(F,U){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return $(F)-$(U)}(w.type,C.type)||this.Va(w.doc,C.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new ho(this.query,e.ma,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Fg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Le(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new M_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new V_(s))}),t}va(e){this.da=e.ds,this.Ra=Le();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ho.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class AR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class PR{constructor(e){this.key=e,this.Fa=!1}}class kR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new es(f=>l_(f),rc),this.Oa=new Map,this.Na=new Set,this.La=new st(ye.comparator),this.Ba=new Map,this.ka=new Jd,this.qa={},this.Qa=new Map,this.Ka=co.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function NR(r,e,t=!0){const s=B_(r);let o;const l=s.xa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await b_(s,e,t,!0),o}async function xR(r,e){const t=B_(r);await b_(t,e,!0,!1)}async function b_(r,e,t,s){const o=await nR(r.localStore,Qn(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await DR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&x_(r.remoteStore,o),f}async function DR(r,e,t,s,o){r.Ua=(C,A,F)=>async function($,B,K,X){let re=B.view.ga(K);re.ss&&(re=await Og($.localStore,B.query,!1).then(({documents:N})=>B.view.ga(N,re)));const ce=X&&X.targetChanges.get(B.targetId),Te=X&&X.targetMismatches.get(B.targetId)!=null,ve=B.view.applyChanges(re,$.isPrimaryClient,ce,Te);return jg($,B.targetId,ve.ba),ve.snapshot}(r,C,A,F);const l=await Og(r.localStore,e,!0),h=new CR(e,l.ds),f=h.ga(l.documents),g=Ha.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);jg(r,t,_.ba);const w=new AR(e,t,h);return r.xa.set(e,w),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),_.snapshot}async function OR(r,e,t){const s=De(r),o=s.xa.get(e),l=s.Oa.get(o.targetId);if(l.length>1)return s.Oa.set(o.targetId,l.filter(h=>!rc(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Id(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&tf(s.remoteStore,o.targetId),Rd(s,o.targetId)}).catch(Ju)):(Rd(s,o.targetId),await Id(s.localStore,o.targetId,!0))}async function LR(r,e){const t=De(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),tf(t.remoteStore,s.targetId))}async function F_(r,e){const t=De(r);try{const s=await eR(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Je(h.Fa):o.removedDocuments.size>0&&(Je(h.Fa),h.Fa=!1))}),await z_(t,s,e)}catch(s){await Ju(s)}}function Bg(r,e,t){const s=De(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=De(h);g.onlineState=f;let _=!1;g.queries.forEach((w,C)=>{for(const A of C.J_)A.ea(f)&&(_=!0)}),_&&af(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VR(r,e,t){const s=De(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),l=o&&o.key;if(l){let h=new st(ye.comparator);h=h.insert(l,Mt.newNoDocument(l,Ee.min()));const f=Le().add(l),g=new ac(Ee.min(),new Map,new st(xe),h,f);await F_(s,g),s.La=s.La.remove(l),s.Ba.delete(e),lf(s)}else await Id(s.localStore,e,!1).then(()=>Rd(s,e,t)).catch(Ju)}function Rd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||U_(r,s)})}function U_(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(tf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),lf(r))}function jg(r,e,t){for(const s of t)s instanceof V_?(r.ka.addReference(s.key,e),MR(r,s)):s instanceof M_?(se("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||U_(r,s.key)):we()}function MR(r,e){const t=e.key,s=t.path.canonicalString();r.La.get(t)||r.Na.has(s)||(se("SyncEngine","New document in limbo: "+t),r.Na.add(s),lf(r))}function lf(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new ye(et.fromString(e)),s=r.Ka.next();r.Ba.set(s,new PR(t)),r.La=r.La.insert(t,s),x_(r.remoteStore,new ii(Qn(a_(t.path)),s,"TargetPurposeLimboResolution",Zu.oe))}}async function z_(r,e,t){const s=De(r),o=[],l=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,g)=>{h.push(s.Ua(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const C=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,C?"current":"not-current")}if(_){o.push(_);const C=ef.zi(g.targetId,_);l.push(C)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const w=De(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>q.forEach(_,A=>q.forEach(A.Wi,F=>w.persistence.referenceDelegate.addReference(C,A.targetId,F)).next(()=>q.forEach(A.Gi,F=>w.persistence.referenceDelegate.removeReference(C,A.targetId,F)))))}catch(C){if(!yo(C))throw C;se("LocalStore","Failed to update sequence numbers: "+C)}for(const C of _){const A=C.targetId;if(!C.fromCache){const F=w.us.get(A),U=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(U);w.us=w.us.insert(A,$)}}}(s.localStore,l))}async function bR(r,e){const t=De(r);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await A_(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(g=>{g.reject(new me(te.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await z_(t,s.Ts)}}function FR(r,e){const t=De(r),s=t.Ba.get(e);if(s&&s.Fa)return Le().add(s.key);{let o=Le();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function B_(r){const e=De(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=F_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.Ma.R_=IR.bind(null,e.eventManager),e.Ma.Wa=SR.bind(null,e.eventManager),e}class $u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=k_(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Z0(this.persistence,new X0,e.initialUser,this.serializer)}ja(e){return new C_(Zd.ei,this.serializer)}za(e){return new iR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$u.provider={build:()=>new $u};class UR extends $u{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Je(this.persistence.referenceDelegate instanceof ju);const s=this.persistence.referenceDelegate.garbageCollector;return new M0(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new C_(s=>ju.ei(s,t),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bR.bind(null,this.syncEngine),await _R(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ER}()}createDatastore(e){const t=k_(e.databaseInfo.databaseId),s=function(l){return new lR(l)}(e.databaseInfo);return function(l,h,f,g){return new hR(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new fR(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Bg(this.syncEngine,t,0),function(){return Vg.p()?new Vg:new sR}())}createSyncEngine(e,t){return function(o,l,h,f,g,_,w){const C=new kR(o,l,h,f,g,_);return w&&(C.$a=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=De(o);se("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Wa(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cd.provider={build:()=>new Cd};/**
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
 */class zR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Vt.UNAUTHENTICATED,this.clientId=ES.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=L_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ed(r,e){r.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await A_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function $g(r,e){r.asyncQueue.verifyOperationInProgress();const t=await jR(r);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>bg(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>bg(e.remoteStore,o)),r._onlineComponents=e}async function jR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await ed(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;oo("Error using user provided cache. Falling back to memory cache: "+t),await ed(r,new $u)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await ed(r,new UR(void 0));return r._offlineComponents}async function $R(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await $g(r,r._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await $g(r,new Cd))),r._onlineComponents}async function HR(r){const e=await $R(r),t=e.eventManager;return t.onListen=NR.bind(null,e.syncEngine),t.onUnlisten=OR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LR.bind(null,e.syncEngine),t}function WR(r,e,t={}){const s=new Gi;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,_){const w=new zR({next:A=>{w.eu(),h.enqueueAndForget(()=>TR(l,C)),A.fromCache&&g.source==="server"?_.reject(new me(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(A)},error:A=>_.reject(A)}),C=new RR(f,w,{includeMetadataChanges:!0,ua:!0});return wR(l,C)}(await HR(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function j_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Hg=new Map;function qR(r,e,t,s){if(e===!0&&s===!0)throw new me(te.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Wg(r){if(ye.isDocumentKey(r))throw new me(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function KR(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we()}function Ad(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new me(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=KR(r);throw new me(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class qg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new me(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new me(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new dS;switch(s.type){case"firstParty":return new gS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Hg.get(t);s&&(se("ComponentProvider","Removing Datastore"),Hg.delete(t),s.terminate())}(this),Promise.resolve()}}function GR(r,e,t,s={}){var o;const l=(r=Ad(r,uf))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Vt.MOCK_USER;else{f=kE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new me(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Vt(_)}r._authCredentials=new fS(new Zy(f,g))}}/**
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
 */class uc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class vo{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ro(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vo(this.firestore,e,this._key)}}class ro extends uc{constructor(e,t,s){super(e,t,a_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vo(this.firestore,null,new ye(e))}withConverter(e){return new ro(this.firestore,e,this._path)}}function QR(r,e,...t){if(r=Cr(r),r instanceof uf){const s=et.fromString(e,...t);return Wg(s),new ro(r,null,s)}{if(!(r instanceof vo||r instanceof ro))throw new me(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return Wg(s),new ro(r.firestore,null,s)}}/**
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
 */class Kg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new N_(this,"async_queue_retry"),this.fu=()=>{const s=Zh();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Gi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yo(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=of.createAndSchedule(this,e,t,s,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class $_ extends uf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Kg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kg(e),this._firestoreClient=void 0,await e}}}function YR(r,e){const t=typeof r=="object"?r:cy(),s=typeof r=="string"?r:"(default)",o=Ld(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=AE("firestore");l&&GR(o,...l)}return o}function XR(r){if(r._terminated)throw new me(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||JR(r),r._firestoreClient}function JR(r){var e,t,s;const o=r._freezeSettings(),l=function(f,g,_,w){return new DS(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,j_(w.experimentalLongPollingOptions),w.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new BR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Hu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hu(At.fromBase64String(e))}catch(t){throw new me(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hu(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class H_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class eC{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}const tC=new RegExp("[~\\*/\\[\\]]");function nC(r,e,t){if(e.search(tC)>=0)throw Gg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new H_(...e.split("."))._internalPath}catch{throw Gg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Gg(r,e,t,s,o){let l=`Function ${e}() called with invalid data`;l+=". ";let h="";return new me(te.INVALID_ARGUMENT,l+r+h)}/**
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
 */class W_{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new vo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(q_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rC extends W_{data(){return super.data()}}function q_(r,e){return typeof e=="string"?nC(r,e):e instanceof H_?e._internalPath:e._delegate._internalPath}/**
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
 */function iC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new me(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sC{convertValue(e,t="none"){switch(di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return $a(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new eC(l)}convertGeoPoint(e){return new ZR(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=tc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=ci(e);return new Jt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=et.fromString(e);Je(R_(s));const o=new Va(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oC extends W_{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(q_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Au extends oC{data(e={}){return super.data(e)}}class aC{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new yu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Au(this._firestore,this._userDataWriter,s.key,s,new yu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Au(o._firestore,o._userDataWriter,f.doc.key,f.doc,new yu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new Au(o._firestore,o._userDataWriter,f.doc.key,f.doc,new yu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:lC(f.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class uC extends sC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vo(this.firestore,null,t)}}function cC(r){r=Ad(r,uc);const e=Ad(r.firestore,$_),t=XR(e),s=new uC(e);return iC(r._query),WR(t,r._query).then(o=>new aC(e,s,r,o))}(function(e,t=!0){(function(o){go=o})(fo),io(new Yi("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new $_(new pS(s.getProvider("auth-internal")),new _S(s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new me(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(_.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),ai(cg,"4.7.5",e),ai(cg,"4.7.5","esm2017")})();const hC={apiKey:"AIzaSyCEVpmsIrHFxd1GTn13RrE64R0glenGIRU",authDomain:"luszdzet.firebaseapp.com",projectId:"luszdzet",storageBucket:"luszdzet.firebasestorage.app",messagingSenderId:"399316364652",appId:"1:399316364652:web:d817890b11a205c10d9749",measurementId:"G-KC6FB6SSE4"},Wu=uy(hC),dC=YR(Wu);hd(Wu);const K_=H.createContext(null),G_=()=>{const r=H.useContext(K_);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r};function fC({children:r}){const[e,t]=H.useState(null),[s,o]=H.useState(!0);H.useEffect(()=>{const f=hd(Wu);return JT(f,_=>{t(_),o(!1)})},[]);const h={currentUser:e,login:(f,g)=>{const _=hd(Wu);return QT(_,f,g)}};return Be.jsx(K_.Provider,{value:h,children:!s&&r})}var _a={},Qg;function pC(){if(Qg)return _a;Qg=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.parse=h,_a.serialize=_;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function h(A,F){const U=new l,$=A.length;if($<2)return U;const B=(F==null?void 0:F.decode)||w;let K=0;do{const X=A.indexOf("=",K);if(X===-1)break;const re=A.indexOf(";",K),ce=re===-1?$:re;if(X>ce){K=A.lastIndexOf(";",X-1)+1;continue}const Te=f(A,K,X),ve=g(A,X,Te),N=A.slice(Te,ve);if(U[N]===void 0){let T=f(A,X+1,ce),S=g(A,ce,T);const k=B(A.slice(T,S));U[N]=k}K=ce+1}while(K<$);return U}function f(A,F,U){do{const $=A.charCodeAt(F);if($!==32&&$!==9)return F}while(++F<U);return U}function g(A,F,U){for(;F>U;){const $=A.charCodeAt(--F);if($!==32&&$!==9)return F+1}return U}function _(A,F,U){const $=(U==null?void 0:U.encode)||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const B=$(F);if(!e.test(B))throw new TypeError(`argument val is invalid: ${F}`);let K=A+"="+B;if(!U)return K;if(U.maxAge!==void 0){if(!Number.isInteger(U.maxAge))throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);K+="; Max-Age="+U.maxAge}if(U.domain){if(!t.test(U.domain))throw new TypeError(`option domain is invalid: ${U.domain}`);K+="; Domain="+U.domain}if(U.path){if(!s.test(U.path))throw new TypeError(`option path is invalid: ${U.path}`);K+="; Path="+U.path}if(U.expires){if(!C(U.expires)||!Number.isFinite(U.expires.valueOf()))throw new TypeError(`option expires is invalid: ${U.expires}`);K+="; Expires="+U.expires.toUTCString()}if(U.httpOnly&&(K+="; HttpOnly"),U.secure&&(K+="; Secure"),U.partitioned&&(K+="; Partitioned"),U.priority)switch(typeof U.priority=="string"?U.priority.toLowerCase():void 0){case"low":K+="; Priority=Low";break;case"medium":K+="; Priority=Medium";break;case"high":K+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${U.priority}`)}if(U.sameSite)switch(typeof U.sameSite=="string"?U.sameSite.toLowerCase():U.sameSite){case!0:case"strict":K+="; SameSite=Strict";break;case"lax":K+="; SameSite=Lax";break;case"none":K+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${U.sameSite}`)}return K}function w(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function C(A){return o.call(A)==="[object Date]"}return _a}pC();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function mC(r={}){function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Pd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ba(o)}return yC(e,t,null,r)}function Qe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function On(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gC(){return Math.random().toString(36).substring(2,10)}function Xg(r,e){return{usr:r.state,key:r.key,idx:e}}function Pd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Eo(e):e,state:t,key:e&&e.key||s||gC()}}function ba({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Eo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function yC(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f="POP",g=null,_=w();_==null&&(_=0,h.replaceState({...h.state,idx:_},""));function w(){return(h.state||{idx:null}).idx}function C(){f="POP";let B=w(),K=B==null?null:B-_;_=B,g&&g({action:f,location:$.location,delta:K})}function A(B,K){f="PUSH";let X=Pd($.location,B,K);_=w()+1;let re=Xg(X,_),ce=$.createHref(X);try{h.pushState(re,"",ce)}catch(Te){if(Te instanceof DOMException&&Te.name==="DataCloneError")throw Te;o.location.assign(ce)}l&&g&&g({action:f,location:$.location,delta:1})}function F(B,K){f="REPLACE";let X=Pd($.location,B,K);_=w();let re=Xg(X,_),ce=$.createHref(X);h.replaceState(re,"",ce),l&&g&&g({action:f,location:$.location,delta:0})}function U(B){let K=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof B=="string"?B:ba(B);return X=X.replace(/ $/,"%20"),Qe(K,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,K)}let $={get action(){return f},get location(){return r(o,h)},listen(B){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Yg,C),g=B,()=>{o.removeEventListener(Yg,C),g=null}},createHref(B){return e(o,B)},createURL:U,encodeLocation(B){let K=U(B);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:F,go(B){return h.go(B)}};return $}function Q_(r,e,t="/"){return _C(r,e,t,!1)}function _C(r,e,t,s){let o=typeof e=="string"?Eo(e):e,l=pi(o.pathname||"/",t);if(l==null)return null;let h=Y_(r);vC(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let _=NC(l);f=PC(h[g],_,s)}return f}function Y_(r,e=[],t=[],s=""){let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(Qe(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let _=wr([s,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(Qe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Y_(l.children,e,w,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:CC(_,l.index),routesMeta:w})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of X_(l.path))o(l,h,g)}),e}function X_(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=X_(s.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function vC(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:AC(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var EC=/^:[\w-]+$/,wC=3,TC=2,IC=1,SC=10,RC=-2,Jg=r=>r==="*";function CC(r,e){let t=r.split("/"),s=t.length;return t.some(Jg)&&(s+=RC),e&&(s+=TC),t.filter(o=>!Jg(o)).reduce((o,l)=>o+(EC.test(l)?wC:l===""?IC:SC),s)}function AC(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function PC(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],_=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",C=qu({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},w),A=g.route;if(!C&&_&&t&&!s[s.length-1].route.index&&(C=qu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},w)),!C)return null;Object.assign(o,C.params),h.push({params:o,pathname:wr([l,C.pathname]),pathnameBase:LC(wr([l,C.pathnameBase])),route:A}),C.pathnameBase!=="/"&&(l=wr([l,C.pathnameBase]))}return h}function qu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=kC(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((_,{paramName:w,isOptional:C},A)=>{if(w==="*"){let U=f[A]||"";h=l.slice(0,l.length-U.length).replace(/(.)\/+$/,"$1")}const F=f[A];return C&&!F?_[w]=void 0:_[w]=(F||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:r}}function kC(r,e=!1,t=!0){On(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function NC(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return On(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function pi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function xC(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Eo(r):r;return{pathname:t?t.startsWith("/")?t:DC(t,e):e,search:VC(s),hash:MC(o)}}function DC(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function td(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OC(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cf(r){let e=OC(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function hf(r,e,t,s=!1){let o;typeof r=="string"?o=Eo(r):(o={...r},Qe(!o.pathname||!o.pathname.includes("?"),td("?","pathname","search",o)),Qe(!o.pathname||!o.pathname.includes("#"),td("#","pathname","hash",o)),Qe(!o.search||!o.search.includes("#"),td("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let C=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),C-=1;o.pathname=A.join("/")}f=C>=0?e[C]:"/"}let g=xC(o,f),_=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||w)&&(g.pathname+="/"),g}var wr=r=>r.join("/").replace(/\/\/+/g,"/"),LC=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),VC=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,MC=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function bC(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var J_=["POST","PUT","PATCH","DELETE"];new Set(J_);var FC=["GET",...J_];new Set(FC);var wo=H.createContext(null);wo.displayName="DataRouter";var cc=H.createContext(null);cc.displayName="DataRouterState";var Z_=H.createContext({isTransitioning:!1});Z_.displayName="ViewTransition";var UC=H.createContext(new Map);UC.displayName="Fetchers";var zC=H.createContext(null);zC.displayName="Await";var Ln=H.createContext(null);Ln.displayName="Navigation";var Ka=H.createContext(null);Ka.displayName="Location";var Jn=H.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var df=H.createContext(null);df.displayName="RouteError";function BC(r,{relative:e}={}){Qe(To(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(Ln),{hash:o,pathname:l,search:h}=Ga(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:wr([t,l])),s.createHref({pathname:f,search:h,hash:o})}function To(){return H.useContext(Ka)!=null}function gi(){return Qe(To(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Ka).location}var ev="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tv(r){H.useContext(Ln).static||H.useLayoutEffect(r)}function ff(){let{isDataRoute:r}=H.useContext(Jn);return r?eA():jC()}function jC(){Qe(To(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(wo),{basename:e,navigator:t}=H.useContext(Ln),{matches:s}=H.useContext(Jn),{pathname:o}=gi(),l=JSON.stringify(cf(s)),h=H.useRef(!1);return tv(()=>{h.current=!0}),H.useCallback((g,_={})=>{if(On(h.current,ev),!h.current)return;if(typeof g=="number"){t.go(g);return}let w=hf(g,JSON.parse(l),o,_.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:wr([e,w.pathname])),(_.replace?t.replace:t.push)(w,_.state,_)},[e,t,l,o,r])}H.createContext(null);function Ga(r,{relative:e}={}){let{matches:t}=H.useContext(Jn),{pathname:s}=gi(),o=JSON.stringify(cf(t));return H.useMemo(()=>hf(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function $C(r,e){return nv(r,e)}function nv(r,e,t,s){var K;Qe(To(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(Ln),{matches:l}=H.useContext(Jn),h=l[l.length-1],f=h?h.params:{},g=h?h.pathname:"/",_=h?h.pathnameBase:"/",w=h&&h.route;{let X=w&&w.path||"";rv(g,!w||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let C=gi(),A;if(e){let X=typeof e=="string"?Eo(e):e;Qe(_==="/"||((K=X.pathname)==null?void 0:K.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${X.pathname}" was given in the \`location\` prop.`),A=X}else A=C;let F=A.pathname||"/",U=F;if(_!=="/"){let X=_.replace(/^\//,"").split("/");U="/"+F.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=Q_(r,{pathname:U});On(w||$!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),On($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=GC($&&$.map(X=>Object.assign({},X,{params:Object.assign({},f,X.params),pathname:wr([_,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?_:wr([_,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,s);return e&&B?H.createElement(Ka.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},B):B}function HC(){let r=ZC(),e=bC(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var WC=H.createElement(HC,null),qC=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?H.createElement(Jn.Provider,{value:this.props.routeContext},H.createElement(df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KC({routeContext:r,match:e,children:t}){let s=H.useContext(wo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Jn.Provider,{value:r},t)}function GC(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let g=o.findIndex(_=>_.route.id&&(l==null?void 0:l[_.route.id])!==void 0);Qe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,f=-1;if(t)for(let g=0;g<o.length;g++){let _=o[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=g),_.route.id){let{loaderData:w,errors:C}=t,A=_.route.loader&&!w.hasOwnProperty(_.route.id)&&(!C||C[_.route.id]===void 0);if(_.route.lazy||A){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((g,_,w)=>{let C,A=!1,F=null,U=null;t&&(C=l&&_.route.id?l[_.route.id]:void 0,F=_.route.errorElement||WC,h&&(f<0&&w===0?(rv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,U=null):f===w&&(A=!0,U=_.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,w+1)),B=()=>{let K;return C?K=F:A?K=U:_.route.Component?K=H.createElement(_.route.Component,null):_.route.element?K=_.route.element:K=g,H.createElement(KC,{match:_,routeContext:{outlet:g,matches:$,isDataRoute:t!=null},children:K})};return t&&(_.route.ErrorBoundary||_.route.errorElement||w===0)?H.createElement(qC,{location:t.location,revalidation:t.revalidation,component:F,error:C,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):B()},null)}function pf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QC(r){let e=H.useContext(wo);return Qe(e,pf(r)),e}function YC(r){let e=H.useContext(cc);return Qe(e,pf(r)),e}function XC(r){let e=H.useContext(Jn);return Qe(e,pf(r)),e}function mf(r){let e=XC(r),t=e.matches[e.matches.length-1];return Qe(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function JC(){return mf("useRouteId")}function ZC(){var s;let r=H.useContext(df),e=YC("useRouteError"),t=mf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function eA(){let{router:r}=QC("useNavigate"),e=mf("useNavigate"),t=H.useRef(!1);return tv(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{On(t.current,ev),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Zg={};function rv(r,e,t){!e&&!Zg[r]&&(Zg[r]=!0,On(!1,t))}H.memo(tA);function tA({routes:r,future:e,state:t}){return nv(r,void 0,t,e)}function nA({to:r,replace:e,state:t,relative:s}){Qe(To(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(Ln);On(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=H.useContext(Jn),{pathname:h}=gi(),f=ff(),g=hf(r,cf(l),h,s==="path"),_=JSON.stringify(g);return H.useEffect(()=>{f(JSON.parse(_),{replace:e,state:t,relative:s})},[f,_,s,e,t]),null}function kd(r){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rA({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Qe(!To(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Eo(t));let{pathname:g="/",search:_="",hash:w="",state:C=null,key:A="default"}=t,F=H.useMemo(()=>{let U=pi(g,h);return U==null?null:{location:{pathname:U,search:_,hash:w,state:C,key:A},navigationType:s}},[h,g,_,w,C,A,s]);return On(F!=null,`<Router basename="${h}"> is not able to match the URL "${g}${_}${w}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:H.createElement(Ln.Provider,{value:f},H.createElement(Ka.Provider,{children:e,value:F}))}function iA({children:r,location:e}){return $C(Nd(r),e)}function Nd(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let l=[...e,o];if(s.type===H.Fragment){t.push.apply(t,Nd(s.props.children,l));return}Qe(s.type===kd,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Nd(s.props.children,l)),t.push(h)}),t}var Pu="get",ku="application/x-www-form-urlencoded";function hc(r){return r!=null&&typeof r.tagName=="string"}function sA(r){return hc(r)&&r.tagName.toLowerCase()==="button"}function oA(r){return hc(r)&&r.tagName.toLowerCase()==="form"}function aA(r){return hc(r)&&r.tagName.toLowerCase()==="input"}function lA(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function uA(r,e){return r.button===0&&(!e||e==="_self")&&!lA(r)}var _u=null;function cA(){if(_u===null)try{new FormData(document.createElement("form"),0),_u=!1}catch{_u=!0}return _u}var hA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nd(r){return r!=null&&!hA.has(r)?(On(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ku}"`),null):r}function dA(r,e){let t,s,o,l,h;if(oA(r)){let f=r.getAttribute("action");s=f?pi(f,e):null,t=r.getAttribute("method")||Pu,o=nd(r.getAttribute("enctype"))||ku,l=new FormData(r)}else if(sA(r)||aA(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||f.getAttribute("action");if(s=g?pi(g,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Pu,o=nd(r.getAttribute("formenctype"))||nd(f.getAttribute("enctype"))||ku,l=new FormData(f,r),!cA()){let{name:_,type:w,value:C}=r;if(w==="image"){let A=_?`${_}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else _&&l.append(_,C)}}else{if(hc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Pu,s=null,o=ku,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}function gf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function fA(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pA(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function mA(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await fA(l,t);return h.links?h.links():[]}return[]}));return vA(s.flat(1).filter(pA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ey(r,e,t,s,o,l){let h=(g,_)=>t[_]?g.route.id!==t[_].route.id:!0,f=(g,_)=>{var w;return t[_].pathname!==g.pathname||((w=t[_].route.path)==null?void 0:w.endsWith("*"))&&t[_].params["*"]!==g.params["*"]};return l==="assets"?e.filter((g,_)=>h(g,_)||f(g,_)):l==="data"?e.filter((g,_)=>{var C;let w=s.routes[g.route.id];if(!w||!w.hasLoader)return!1;if(h(g,_)||f(g,_))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((C=t[0])==null?void 0:C.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function gA(r,e){return yA(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function yA(r){return[...new Set(r)]}function _A(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function vA(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(_A(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function EA(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function wA(){let r=H.useContext(wo);return gf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function TA(){let r=H.useContext(cc);return gf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var yf=H.createContext(void 0);yf.displayName="FrameworkContext";function iv(){let r=H.useContext(yf);return gf(r,"You must render this element inside a <HydratedRouter> element"),r}function IA(r,e){let t=H.useContext(yf),[s,o]=H.useState(!1),[l,h]=H.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:_,onMouseLeave:w,onTouchStart:C}=e,A=H.useRef(null);H.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=K=>{K.forEach(X=>{h(X.isIntersecting)})},B=new IntersectionObserver($,{threshold:.5});return A.current&&B.observe(A.current),()=>{B.disconnect()}}},[r]),H.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let F=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,A,{}]:[l,A,{onFocus:va(f,F),onBlur:va(g,U),onMouseEnter:va(_,F),onMouseLeave:va(w,U),onTouchStart:va(C,F)}]:[!1,A,{}]}function va(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function SA({page:r,...e}){let{router:t}=wA(),s=H.useMemo(()=>Q_(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?H.createElement(CA,{page:r,matches:s,...e}):null}function RA(r){let{manifest:e,routeModules:t}=iv(),[s,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return mA(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function CA({page:r,matches:e,...t}){let s=gi(),{manifest:o,routeModules:l}=iv(),{loaderData:h,matches:f}=TA(),g=H.useMemo(()=>ey(r,e,f,o,s,"data"),[r,e,f,o,s]),_=H.useMemo(()=>ey(r,e,f,o,s,"assets"),[r,e,f,o,s]),w=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let F=new Set,U=!1;if(e.forEach(B=>{var X;let K=o.routes[B.route.id];!K||!K.hasLoader||(!g.some(re=>re.route.id===B.route.id)&&B.route.id in h&&((X=l[B.route.id])!=null&&X.shouldRevalidate)||K.hasClientLoader?U=!0:F.add(B.route.id))}),F.size===0)return[];let $=EA(r);return U&&F.size>0&&$.searchParams.set("_routes",e.filter(B=>F.has(B.route.id)).map(B=>B.route.id).join(",")),[$.pathname+$.search]},[h,s,o,g,e,r,l]),C=H.useMemo(()=>gA(_,o),[_,o]),A=RA(_);return H.createElement(H.Fragment,null,w.map(F=>H.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...t})),C.map(F=>H.createElement("link",{key:F,rel:"modulepreload",href:F,...t})),A.map(({key:F,link:U})=>H.createElement("link",{key:F,...U})))}function AA(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sv&&(window.__reactRouterVersion="7.1.1")}catch{}function PA({basename:r,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=mC({window:t,v5Compat:!0}));let o=s.current,[l,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(g=>{H.startTransition(()=>h(g))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(rA,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:f,target:g,to:_,preventScrollReset:w,viewTransition:C,...A},F){let{basename:U}=H.useContext(Ln),$=typeof _=="string"&&ov.test(_),B,K=!1;if(typeof _=="string"&&$&&(B=_,sv))try{let S=new URL(window.location.href),k=_.startsWith("//")?new URL(S.protocol+_):new URL(_),D=pi(k.pathname,U);k.origin===S.origin&&D!=null?_=D+k.search+k.hash:K=!0}catch{On(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=BC(_,{relative:o}),[re,ce,Te]=IA(s,A),ve=DA(_,{replace:h,state:f,target:g,preventScrollReset:w,relative:o,viewTransition:C});function N(S){e&&e(S),S.defaultPrevented||ve(S)}let T=H.createElement("a",{...A,...Te,href:B||X,onClick:K||l?e:N,ref:AA(F,ce),target:g,"data-discover":!$&&t==="render"?"true":void 0});return re&&!$?H.createElement(H.Fragment,null,T,H.createElement(SA,{page:X})):T});av.displayName="Link";var kA=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:f,children:g,..._},w){let C=Ga(h,{relative:_.relative}),A=gi(),F=H.useContext(cc),{navigator:U,basename:$}=H.useContext(Ln),B=F!=null&&bA(C)&&f===!0,K=U.encodeLocation?U.encodeLocation(C).pathname:C.pathname,X=A.pathname,re=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;t||(X=X.toLowerCase(),re=re?re.toLowerCase():null,K=K.toLowerCase()),re&&$&&(re=pi(re,$)||re);const ce=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let Te=X===K||!o&&X.startsWith(K)&&X.charAt(ce)==="/",ve=re!=null&&(re===K||!o&&re.startsWith(K)&&re.charAt(K.length)==="/"),N={isActive:Te,isPending:ve,isTransitioning:B},T=Te?e:void 0,S;typeof s=="function"?S=s(N):S=[s,Te?"active":null,ve?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return H.createElement(av,{..._,"aria-current":T,className:S,ref:w,style:k,to:h,viewTransition:f},typeof g=="function"?g(N):g)});kA.displayName="NavLink";var NA=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=Pu,action:f,onSubmit:g,relative:_,preventScrollReset:w,viewTransition:C,...A},F)=>{let U=VA(),$=MA(f,{relative:_}),B=h.toLowerCase()==="get"?"get":"post",K=typeof f=="string"&&ov.test(f),X=re=>{if(g&&g(re),re.defaultPrevented)return;re.preventDefault();let ce=re.nativeEvent.submitter,Te=(ce==null?void 0:ce.getAttribute("formmethod"))||h;U(ce||re.currentTarget,{fetcherKey:e,method:Te,navigate:t,replace:o,state:l,relative:_,preventScrollReset:w,viewTransition:C})};return H.createElement("form",{ref:F,method:B,action:$,onSubmit:s?g:X,...A,"data-discover":!K&&r==="render"?"true":void 0})});NA.displayName="Form";function xA(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(r){let e=H.useContext(wo);return Qe(e,xA(r)),e}function DA(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=ff(),g=gi(),_=Ga(r,{relative:l});return H.useCallback(w=>{if(uA(w,e)){w.preventDefault();let C=t!==void 0?t:ba(g)===ba(_);f(r,{replace:C,state:s,preventScrollReset:o,relative:l,viewTransition:h})}},[g,f,_,t,s,e,r,o,l,h])}var OA=0,LA=()=>`__${String(++OA)}__`;function VA(){let{router:r}=lv("useSubmit"),{basename:e}=H.useContext(Ln),t=JC();return H.useCallback(async(s,o={})=>{let{action:l,method:h,encType:f,formData:g,body:_}=dA(s,e);if(o.navigate===!1){let w=o.fetcherKey||LA();await r.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function MA(r,{relative:e}={}){let{basename:t}=H.useContext(Ln),s=H.useContext(Jn);Qe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Ga(r||".",{relative:e})},h=gi();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),g=f.getAll("index");if(g.some(w=>w==="")){f.delete("index"),g.filter(C=>C).forEach(C=>f.append("index",C));let w=f.toString();l.search=w?`?${w}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:wr([t,l.pathname])),ba(l)}function bA(r,e={}){let t=H.useContext(Z_);Qe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=lv("useViewTransitionState"),o=Ga(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=pi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=pi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return qu(o.pathname,h)!=null||qu(o.pathname,l)!=null}new TextEncoder;const FA=({children:r})=>{const{currentUser:e}=G_();return e?r:Be.jsx(nA,{to:"/luszdzet/login"})},UA=()=>{const[r,e]=H.useState(""),[t,s]=H.useState(""),[o,l]=H.useState(""),{login:h}=G_(),f=ff(),g=async _=>{_.preventDefault();try{l(""),await h(r,t),f("/main")}catch{l("Nie udało się zalogować")}};return Be.jsxs("div",{children:[Be.jsx("h2",{children:"Login"}),o&&Be.jsx("p",{children:o}),Be.jsxs("form",{onSubmit:g,children:[Be.jsxs("div",{children:[Be.jsx("label",{children:"Email:"}),Be.jsx("input",{type:"email",value:r,onChange:_=>e(_.target.value),required:!0})]}),Be.jsxs("div",{children:[Be.jsx("label",{children:"Hasło:"}),Be.jsx("input",{type:"password",value:t,onChange:_=>s(_.target.value),required:!0})]}),Be.jsx("button",{type:"submit",children:"Zaloguj się"})]})]})},zA=()=>{const[r,e]=H.useState([]),t=async()=>{await cC(QR(dC,"todos")).then(s=>{const o=s.docs.map(l=>({...l.data(),id:l.id}));e(o),console.log(r,o)})};return H.useEffect(()=>{t()},[]),console.log(r),Be.jsxs("div",{children:[Be.jsx("h1",{children:"Main"}),Be.jsx("ul",{children:r.map(s=>Be.jsx("li",{children:s.todo},s.id))})]})};function BA(){return Be.jsx(fC,{children:Be.jsx(PA,{basename:"/luszdzet",children:Be.jsxs(iA,{children:[Be.jsx(kd,{path:"/",element:Be.jsx(UA,{})}),Be.jsx(kd,{path:"/main",element:Be.jsx(FA,{children:Be.jsx(zA,{})})})]})})})}vE.createRoot(document.getElementById("root")).render(Be.jsx(H.StrictMode,{children:Be.jsx(BA,{})}));
