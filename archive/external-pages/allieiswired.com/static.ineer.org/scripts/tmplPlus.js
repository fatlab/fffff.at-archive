/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/bongda/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * tmplPlus.js: for jQuery Templates Plugin 1.0.0pre
 * Additional templating features or support for more advanced/less common scenarios.
 * Requires jquery.tmpl.js
 * http://github.com/jquery/jquery-tmpl
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
!function(e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e(jQuery)}(function(e){var t=e.tmpl.complete,n=e.fn.domManip;e.tmpl.complete=function(n){var r;t(n);for(r in n){ r=n[r],r.addedTmplItems&&-1===e.inArray(r,r.addedTmplItems)&&r.addedTmplItems.push(r); }for(r in n){ r=n[r],r.rendered&&r.rendered(r) }},e.extend({tmplCmd:function(t,n,r){function a(e,t){for(var n,r,a,l=[],p=t.length,o=0,i=e.length;i>o;){ for(a=e[o++],r=0;p>r;){ n=t[r++],n.data===a&&l.push(n); } }return l}var l,p=[];switch(n=e.isArray(n)?n:[n],t){case'find':return a(n,r);case'replace':n.reverse()}return e.each(r?a(n,r):n,function(n,a){switch(coll=a.nodes,t){case'update':a.update();break;case'remove':e(coll).remove(),r&&r.splice(e.inArray(a,r),1);break;case'replace':l=l?e(coll).insertBefore(l)[0]:e(coll).appendTo(coll[0].parentNode)[0],p.unshift(a)}}),p}}),e.fn.extend({domManip:function(t,r,a){var l,p=t[1],o=t[0];return t.length<2||'object'!=typeof p||p.nodeType||p instanceof e?n.apply(this,arguments):(l=e.makeArray(arguments),l[0]=[e.tmpl(e.template(o),p,t[2],t[3])],l[2]=function(t){e.tmpl.afterManip(this,t,a)},n.apply(this,l))}})});

/***/ })

/******/ });
//# sourceMappingURL=tmplPlus.js.map