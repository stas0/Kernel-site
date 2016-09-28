/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../typings/globals/jquery/index.d.ts" />
	var state_1 = __webpack_require__(1);
	var toolbarState = new state_1.ToolbarState();


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var ToolbarState = (function () {
	    function ToolbarState() {
	        $(document).ready(function () {
	            var state = $('.courses .header .toolbar > div.state');
	            var list = state.find('.list');
	            state.find('.btn').click(function (e) {
	                list.toggleClass('switch');
	            });
	            $('*').mousedown(function (e) {
	                e.stopPropagation();
	                if ($(e.target).hasClass('state') || $(e.target).parent().hasClass('state')) {
	                    return;
	                }
	                var parents = $(e.target).parentsUntil('div.state');
	                var parent = $(parents[parents.length - 1]).parent();
	                if (parent.hasClass('state')) {
	                    return;
	                }
	                list.removeClass('switch');
	            });
	        });
	    }
	    return ToolbarState;
	}());
	exports.ToolbarState = ToolbarState;


/***/ }
/******/ ]);