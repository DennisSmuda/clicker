/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _GameState = __webpack_require__(1);
	
	var _GameState2 = _interopRequireDefault(_GameState);
	
	var _Preload = __webpack_require__(4);
	
	var _Preload2 = _interopRequireDefault(_Preload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);
	
	  function Game() {
	    _classCallCheck(this, Game);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 384, 497, Phaser.AUTO, 'content', null));
	
	    _this.state.add('GameState', _GameState2.default, false);
	    _this.state.add('Preload', _Preload2.default, false);
	    _this.state.start('Preload');
	    return _this;
	  }
	
	  return Game;
	}(Phaser.Game);
	
	new Game();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cookie = __webpack_require__(5);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _CookieCounter = __webpack_require__(6);
	
	var _CookieCounter2 = _interopRequireDefault(_CookieCounter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GameState = function (_Phaser$State) {
	  _inherits(GameState, _Phaser$State);
	
	  function GameState() {
	    _classCallCheck(this, GameState);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameState).apply(this, arguments));
	  }
	
	  _createClass(GameState, [{
	    key: 'create',
	    value: function create() {
	      this.centerPos = { x: this.game.world.centerX, y: this.game.world.centerY };
	      this.gamestate = {
	        timesClicked: 0,
	        cookies: 0
	      };
	
	      this.gameBackground = this.add.sprite(0, 0, 'game-background');
	
	      this.cookie = new _Cookie2.default(this.game, this.centerPos.x, 120, this.gamestate);
	      this.cookieCounter = new _CookieCounter2.default(this.game, this.gamestate);
	
	      // let text = new RainbowText(this.game, 0, center.y/2, "- phaser -\nwith a sprinkle of\nES6 dust!");
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.cookieCounter.update();
	    }
	  }]);
	
	  return GameState;
	}(Phaser.State);
	
	exports.default = GameState;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);
	
	  function Preload() {
	    _classCallCheck(this, Preload);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).call(this));
	
	    _this.background = null;
	    _this.preloadBar = null;
	    _this.ready = false;
	    return _this;
	  }
	
	  _createClass(Preload, [{
	    key: 'preload',
	    value: function preload() {
	      // this.stage.backgroundColor = '#2C5146';
	      // this.load.image('game-background', 'assets/images/game-background.png');
	      this.load.image('game-background', './images/background.png');
	      this.load.image('cookie', './images/cookie.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {}
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.ready == false) {
	        this.ready = true;
	        this.state.start('GameState');
	      }
	    }
	  }]);
	
	  return Preload;
	}(Phaser.State);
	
	exports.default = Preload;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cookie = function (_Phaser$Sprite) {
	  _inherits(Cookie, _Phaser$Sprite);
	
	  function Cookie(game, x, y, gamestate) {
	    _classCallCheck(this, Cookie);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cookie).call(this, game, x, y, 'cookie'));
	
	    _this.game = game;
	    _this.gamestate = gamestate;
	    _this.enableBody = true;
	    _this.anchor.setTo(0.5);
	
	    _this.game.stage.addChild(_this);
	
	    _this.inputEnabled = true;
	    _this.events.onInputDown.add(function () {
	      _this.onClick();
	    });
	    _this.events.onInputOver.add(function () {
	      _this.onOver();
	    });
	    _this.events.onInputOut.add(function () {
	      _this.onOut();
	    });
	
	    return _this;
	  }
	
	  _createClass(Cookie, [{
	    key: 'onClick',
	    value: function onClick() {
	      console.log('Clicked');
	      this.gamestate.timesClicked++;
	      this.gamestate.cookies++;
	      this.scale.setTo(1.05);
	    }
	  }, {
	    key: 'onOver',
	    value: function onOver() {
	      this.game.canvas.style.cursor = "pointer";
	      this.scale.setTo(1.1);
	    }
	  }, {
	    key: 'onOut',
	    value: function onOut() {
	      this.game.canvas.style.cursor = "initial";
	      this.scale.setTo(1.0);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.angle += 1;
	    }
	  }]);
	
	  return Cookie;
	}(Phaser.Sprite);
	
	exports.default = Cookie;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CookieCounter = function () {
	  function CookieCounter(game, gamestate) {
	    _classCallCheck(this, CookieCounter);
	
	    this.game = game;
	    this.gamestate = gamestate;
	
	    this.cookieCounterText = this.game.add.text(this.game.world.centerX, 10, 'Cookies: ' + this.gamestate.cookies, {
	      font: '16px Roboto Mono',
	      fill: '#FFFFFF',
	      align: 'center'
	    });
	
	    this.cookieCounterText.anchor.setTo(0.5);
	  }
	
	  _createClass(CookieCounter, [{
	    key: 'update',
	    value: function update() {
	      this.cookieCounterText.setText('Cookies: ' + this.gamestate.cookies);
	    }
	  }]);
	
	  return CookieCounter;
	}();
	
	exports.default = CookieCounter;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzMwNTQzMzViZjRiMTFmZGI5YzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUHJlbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvdW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQ00sSUFBSTthQUFKLElBQUk7O0FBRVIsWUFGSSxJQUFJLEdBRU07MkJBRlYsSUFBSTs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFDNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsdUJBQWEsS0FBSyxDQUFDLENBQUM7QUFDOUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMscUJBQVcsS0FBSyxDQUFDLENBQUM7QUFDMUMsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUM3Qjs7VUFQRyxJQUFJO0dBQVMsTUFBTSxDQUFDLElBQUk7O0FBVzlCLEtBQUksSUFBSSxFQUFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1hXLFNBQVM7YUFBVCxTQUFTOztZQUFULFNBQVM7MkJBQVQsU0FBUzs7bUVBQVQsU0FBUzs7O2dC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QUksRUFBRSxTQUFTO0FBQ2YsWUFBSyxFQUFFLFFBQVE7TUFDaEIsQ0FBQyxDQUFDOztBQUVILFNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTFDOztnQkFka0IsYUFBYTs7OEJBa0J2QjtBQUNQLFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLGVBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUcsQ0FBQztNQUN0RTs7O1VBcEJrQixhQUFhOzs7bUJBQWIsYUFBYSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzMwNTQzMzViZjRiMTFmZGI5YzhcbiAqKi8iLCJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9zdGF0ZXMvR2FtZVN0YXRlJztcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vc3RhdGVzL1ByZWxvYWQnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDM4NCwgNDk3LCBQaGFzZXIuQVVUTywgJ2NvbnRlbnQnLCBudWxsKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnR2FtZVN0YXRlJywgR2FtZVN0YXRlLCBmYWxzZSk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ1ByZWxvYWQnLCBQcmVsb2FkLCBmYWxzZSk7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnUHJlbG9hZCcpO1xuICB9XG5cbn1cblxubmV3IEdhbWUoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IENvb2tpZSBmcm9tICcuLi9tb2RlbHMvQ29va2llJztcbmltcG9ydCBDb29raWVDb3VudGVyIGZyb20gJy4uL21vZGVscy9Db29raWVDb3VudGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmNlbnRlclBvcyA9IHsgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIH1cbiAgICB0aGlzLmdhbWVzdGF0ZSA9IHtcbiAgICAgIHRpbWVzQ2xpY2tlZDogMCxcbiAgICAgIGNvb2tpZXM6IDAsXG4gICAgfVxuXG4gICAgdGhpcy5nYW1lQmFja2dyb3VuZCA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWUodGhpcy5nYW1lLCB0aGlzLmNlbnRlclBvcy54LCAxMjAsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIgPSBuZXcgQ29va2llQ291bnRlcih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcblxuICAgIC8vIGxldCB0ZXh0ID0gbmV3IFJhaW5ib3dUZXh0KHRoaXMuZ2FtZSwgMCwgY2VudGVyLnkvMiwgXCItIHBoYXNlciAtXFxud2l0aCBhIHNwcmlua2xlIG9mXFxuRVM2IGR1c3QhXCIpO1xuICB9XG5cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jb29raWVDb3VudGVyLnVwZGF0ZSgpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG4gICAgdGhpcy5wcmVsb2FkQmFyID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ICAgICAgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgLy8gdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJDNTE0Nic7XG4gICAgLy8gdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnLi9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Nvb2tpZScsICcuL2ltYWdlcy9jb29raWUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdHYW1lU3RhdGUnKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1ByZWxvYWQuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGdhbWVzdGF0ZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjb29raWUnKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4geyB0aGlzLm9uQ2xpY2soKTsgfSlcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4geyB0aGlzLm9uT3ZlcigpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHsgdGhpcy5vbk91dCgpOyB9KVxuXG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG4gICAgdGhpcy5nYW1lc3RhdGUudGltZXNDbGlja2VkKys7XG4gICAgdGhpcy5nYW1lc3RhdGUuY29va2llcysrO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4wNSk7XG4gIH1cblxuICBvbk92ZXIoKSB7XG4gICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB0aGlzLnNjYWxlLnNldFRvKDEuMSk7XG4gIH1cblxuICBvbk91dCgpIHtcbiAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiaW5pdGlhbFwiO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4wKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmFuZ2xlICs9IDE7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Db29raWUuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQ291bnRlciB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgdGhpcy5nYW1lICAgICAgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuXG4gICAgdGhpcy5jb29raWVDb3VudGVyVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgMTAsIGBDb29raWVzOiAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXN9YCwge1xuICAgICAgZm9udDogJzE2cHggUm9ib3RvIE1vbm8nLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb2tpZUNvdW50ZXJUZXh0LmFuY2hvci5zZXRUbygwLjUpO1xuXG4gIH1cblxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY29va2llQ291bnRlclRleHQuc2V0VGV4dChgQ29va2llczogJHt0aGlzLmdhbWVzdGF0ZS5jb29raWVzfWApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvQ29va2llQ291bnRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=