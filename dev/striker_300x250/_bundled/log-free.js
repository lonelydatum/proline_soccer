(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.defaultEase = Power3.easeOut;

function start() {

	var tl = new TimelineMax();

	tl.set(".frame1", { opacity: 1 });
	striker();
	tl.from(".t1a", .1, { x: "-=200", opacity: 0 }, 1.0);
	tl.from(".t1b", .01, { opacity: 0 }, "+=1");

	tl.add(f2(), "+=2");
}

function f2() {
	var w = _commonJsCommonJs.size.w;
	var h = _commonJsCommonJs.size.h;

	var tl = new TimelineMax();

	tl.set(".frame2", { opacity: 1 });
	tl.from(".bg2", .2, { opacity: 0 });
	tl.set(".ill", { transformOrigin: w + "px " + h * 2 + "px", x: -w / 2, y: -h });

	tl.from(".phone", .3, { y: "+=" + h }, "+=.3");
	tl.from(".ill", .3, { scale: 0 });

	tl.from(".t2", .01, { opacity: 0 }, "+=.3");
	tl.from(".cta1", .01, { opacity: 0 }, "+=1.5");
	tl.to(".cta1", .01, { opacity: 0 }, "+=2");
	tl.from(".cta2", .2, { opacity: 0 }, "+=.2");

	return tl;
}

function striker() {
	var tl = new TimelineMax();

	tl.add("start", 0);
	var total = 4;
	// for(let i=total; i>0;i--){
	for (var i = 1; i <= total; i++) {
		var percent = i / total * .17;

		var obj = { x: 0, y: 0, ease: Power4.easeOut };
		if (i !== total) {
			obj = _extends({}, obj, { opacity: 0 });
		}
		tl.to("#player" + i, .8, obj, "start+=" + percent);
	}

	// tl.reverse()
	// tl.play();
	TweenLite.to(".ball", .8, { x: 0, y: 0, ease: Power4.easeOut, delay: .3 });
	return tl;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
