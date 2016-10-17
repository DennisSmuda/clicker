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
	
	      this.cookie = new _Cookie2.default(this.game, this.centerPos.x, 160, this.gamestate);
	      this.cookieCounter = new _CookieCounter2.default(this.game, this.gamestate);
	      this.group1 = this.game.add.group();
	
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
	      this.load.image('cookie-particle', './images/cookie-particle.png');
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
	    _this.events.onInputDown.add(function (pointer) {
	      _this.onClick(pointer);
	    });
	    _this.events.onInputOver.add(function () {
	      _this.onOver();
	    });
	    _this.events.onInputOut.add(function () {
	      _this.onOut();
	    });
	
	    _this.emitter = _this.game.add.emitter(0, 0, 10);
	    _this.emitter.makeParticles('cookie-particle');
	    _this.emitter.gravity = 0;
	    _this.emitter.particleBringToTop = true;
	    _this.emitter.x = x;
	    _this.emitter.y = y;
	    _this.emitter.minParticleSpeed.set(500, 0);
	    _this.emitter.maxParticleSpeed.set(500, 0);
	    return _this;
	  }
	
	  _createClass(Cookie, [{
	    key: 'onClick',
	    value: function onClick(pointer) {
	      console.log('Clicked');
	      this.gamestate.timesClicked++;
	      this.gamestate.cookies++;
	      this.scale.setTo(1.05);
	      this.emitter.start(true, 1200, null, 1);
	      this.emitter.setAlpha(1, 0, 1100);
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
	      this.angle += 0.4;
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
	
	    this.cookieCounter = this.game.add.text(this.game.world.centerX, 55, '' + this.gamestate.cookies, {
	      font: '26px Lobster',
	      fill: '#FFFFFF',
	      align: 'center'
	    });
	
	    this.cookieCounterText = this.game.add.text(this.game.world.centerX, 25, 'Cookies', {
	      font: '26px Lobster',
	      fill: '#FFFFFF',
	      align: 'center'
	    });
	    this.cookieCounterText.anchor.setTo(0.5);
	    this.cookieCounter.anchor.setTo(0.5);
	  }
	
	  _createClass(CookieCounter, [{
	    key: 'update',
	    value: function update() {
	      this.cookieCounterText.setText('Cookies');
	      this.cookieCounter.setText('' + this.gamestate.cookies);
	    }
	  }]);
	
	  return CookieCounter;
	}();
	
	exports.default = CookieCounter;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRjYjc3ZTE5ZmI5Zjg3NTIzZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUHJlbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvdW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQ00sSUFBSTthQUFKLElBQUk7O0FBRVIsWUFGSSxJQUFJLEdBRU07MkJBRlYsSUFBSTs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFDNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsdUJBQWEsS0FBSyxDQUFDLENBQUM7QUFDOUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMscUJBQVcsS0FBSyxDQUFDLENBQUM7QUFDMUMsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUM3Qjs7VUFQRyxJQUFJO0dBQVMsTUFBTSxDQUFDLElBQUk7O0FBVzlCLEtBQUksSUFBSSxFQUFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1hXLFNBQVM7YUFBVCxTQUFTOztZQUFULFNBQVM7MkJBQVQsU0FBUzs7bUVBQVQsU0FBUzs7O2dC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QUMsT0FBTyxFQUFFLEVBQUUsYUFBYTtBQUNsRixXQUFJLEVBQUUsY0FBYztBQUNwQixXQUFJLEVBQUUsU0FBUztBQUNmLFlBQUssRUFBRSxRQUFRO01BQ2hCLENBQUMsQ0FBQztBQUNILFNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFNBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV0Qzs7Z0JBckJrQixhQUFhOzs4QkF5QnZCO0FBQ1AsV0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sV0FBVyxDQUFDO0FBQzFDLFdBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFHLENBQUM7TUFDekQ7OztVQTVCa0IsYUFBYTs7O21CQUFiLGFBQWEsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVkY2I3N2UxOWZiOWY4NzUyM2VmXG4gKiovIiwiXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gJy4vc3RhdGVzL0dhbWVTdGF0ZSc7XG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3N0YXRlcy9QcmVsb2FkJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigzODQsIDQ5NywgUGhhc2VyLkFVVE8sICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ0dhbWVTdGF0ZScsIEdhbWVTdGF0ZSwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQcmVsb2FkJywgUHJlbG9hZCwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgfVxuXG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBDb29raWUgZnJvbSAnLi4vbW9kZWxzL0Nvb2tpZSc7XG5pbXBvcnQgQ29va2llQ291bnRlciBmcm9tICcuLi9tb2RlbHMvQ29va2llQ291bnRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5jZW50ZXJQb3MgPSB7IHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSB9XG4gICAgdGhpcy5nYW1lc3RhdGUgPSB7XG4gICAgICB0aW1lc0NsaWNrZWQ6IDAsXG4gICAgICBjb29raWVzOiAwLFxuICAgIH1cblxuICAgIHRoaXMuZ2FtZUJhY2tncm91bmQgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuXG4gICAgdGhpcy5jb29raWUgPSBuZXcgQ29va2llKHRoaXMuZ2FtZSwgdGhpcy5jZW50ZXJQb3MueCwgMTYwLCB0aGlzLmdhbWVzdGF0ZSk7XG4gICAgdGhpcy5jb29raWVDb3VudGVyID0gbmV3IENvb2tpZUNvdW50ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWVzdGF0ZSk7XG4gICAgdGhpcy5ncm91cDEgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG5cbiAgICAvLyBsZXQgdGV4dCA9IG5ldyBSYWluYm93VGV4dCh0aGlzLmdhbWUsIDAsIGNlbnRlci55LzIsIFwiLSBwaGFzZXIgLVxcbndpdGggYSBzcHJpbmtsZSBvZlxcbkVTNiBkdXN0IVwiKTtcbiAgfVxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY29va2llQ291bnRlci51cGRhdGUoKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL0dhbWVTdGF0ZS5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xuICAgIHRoaXMucHJlbG9hZEJhciA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSAgICAgID0gZmFsc2U7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIC8vIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyQzUxNDYnO1xuICAgIC8vIHRoaXMubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWFnZXMvZ2FtZS1iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJy4vaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdjb29raWUnLCAnLi9pbWFnZXMvY29va2llLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnY29va2llLXBhcnRpY2xlJywgJy4vaW1hZ2VzL2Nvb2tpZS1wYXJ0aWNsZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWVTdGF0ZScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvUHJlbG9hZC5qc1xuICoqLyIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZ2FtZXN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nvb2tpZScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5nYW1lc3RhdGUgPSBnYW1lc3RhdGU7XG4gICAgdGhpcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCgocG9pbnRlcikgPT4geyB0aGlzLm9uQ2xpY2socG9pbnRlcik7IH0pXG4gICAgdGhpcy5ldmVudHMub25JbnB1dE92ZXIuYWRkKCgpID0+IHsgdGhpcy5vbk92ZXIoKTsgfSlcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3V0LmFkZCgoKSA9PiB7IHRoaXMub25PdXQoKTsgfSlcblxuICAgIHRoaXMuZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMCk7XG4gICAgdGhpcy5lbWl0dGVyLm1ha2VQYXJ0aWNsZXMoJ2Nvb2tpZS1wYXJ0aWNsZScpO1xuICAgIHRoaXMuZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICB0aGlzLmVtaXR0ZXIucGFydGljbGVCcmluZ1RvVG9wID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXR0ZXIueCA9IHg7XG4gICAgdGhpcy5lbWl0dGVyLnkgPSB5O1xuICAgIHRoaXMuZW1pdHRlci5taW5QYXJ0aWNsZVNwZWVkLnNldCg1MDAsIDApO1xuICAgIHRoaXMuZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldCg1MDAsIDApO1xuICB9XG5cbiAgb25DbGljayhwb2ludGVyKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQnKTtcbiAgICB0aGlzLmdhbWVzdGF0ZS50aW1lc0NsaWNrZWQrKztcbiAgICB0aGlzLmdhbWVzdGF0ZS5jb29raWVzKys7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjA1KTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSwgMTIwMCwgbnVsbCwgMSk7XG4gICAgdGhpcy5lbWl0dGVyLnNldEFscGhhKDEsIDAsIDExMDApO1xuICB9XG5cbiAgb25PdmVyKCkge1xuICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjEpO1xuICB9XG5cbiAgb25PdXQoKSB7XG4gICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImluaXRpYWxcIjtcbiAgICB0aGlzLnNjYWxlLnNldFRvKDEuMCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5hbmdsZSArPSAwLjQ7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Db29raWUuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQ291bnRlciB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgdGhpcy5nYW1lICAgICAgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuXG5cbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIDU1LCBgJHt0aGlzLmdhbWVzdGF0ZS5jb29raWVzfWAsIHtcbiAgICAgIGZvbnQ6ICcyNnB4IExvYnN0ZXInLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb2tpZUNvdW50ZXJUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCAyNSwgYENvb2tpZXNgLCB7XG4gICAgICBmb250OiAnMjZweCBMb2JzdGVyJyxcbiAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgIH0pO1xuICAgIHRoaXMuY29va2llQ291bnRlclRleHQuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgdGhpcy5jb29raWVDb3VudGVyLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gIH1cblxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY29va2llQ291bnRlclRleHQuc2V0VGV4dChgQ29va2llc2ApO1xuICAgIHRoaXMuY29va2llQ291bnRlci5zZXRUZXh0KGAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXN9YCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Db29raWVDb3VudGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==