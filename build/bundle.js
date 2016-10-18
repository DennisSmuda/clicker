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
	
	var _Cookie = __webpack_require__(2);
	
	var _Cookie2 = _interopRequireDefault(_Cookie);
	
	var _CookieCounter = __webpack_require__(3);
	
	var _CookieCounter2 = _interopRequireDefault(_CookieCounter);
	
	var _ProductionCounter = __webpack_require__(6);
	
	var _ProductionCounter2 = _interopRequireDefault(_ProductionCounter);
	
	var _Oven = __webpack_require__(5);
	
	var _Oven2 = _interopRequireDefault(_Oven);
	
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
	        cookies: 0,
	        ovens: 0,
	        productionRate: 0
	      };
	
	      this.gameBackground = this.add.sprite(0, 0, 'game-background');
	
	      this.cookie = new _Cookie2.default(this.game, this.centerPos.x, 140, this.gamestate);
	      this.cookieCounter = new _CookieCounter2.default(this.game, this.gamestate);
	      this.prodCounter = new _ProductionCounter2.default(this.game, this.gamestate);
	
	      this.oven = new _Oven2.default(this.game, this.gamestate);
	
	      // let text = new RainbowText(this.game, 0, center.y/2, "- phaser -\nwith a sprinkle of\nES6 dust!");
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.cookieCounter.update();
	      this.prodCounter.update();
	    }
	  }]);
	
	  return GameState;
	}(Phaser.State);
	
	exports.default = GameState;

/***/ },
/* 2 */
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
	      this.emitter.setAlpha(0.7, 0, 200);
	      this.emitter.start(true, 800, null, 1);
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
/* 3 */
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
	
	    this.cookieCounter = this.game.add.text(368, 16, '' + this.gamestate.cookies, {
	      font: '26px Lobster',
	      fill: '#FFFFFF',
	      align: 'right'
	    });
	
	    this.cookieCounter.anchor.setTo(1, 0);
	  }
	
	  _createClass(CookieCounter, [{
	    key: 'update',
	    value: function update() {
	      this.cookieCounter.setText('Cookies\n ' + this.gamestate.cookies);
	    }
	  }]);
	
	  return CookieCounter;
	}();
	
	exports.default = CookieCounter;

/***/ },
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
	      this.load.image('oven', './images/oven.png');
	
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
	
	var Oven = function (_Phaser$Sprite) {
	  _inherits(Oven, _Phaser$Sprite);
	
	  function Oven(game, gamestate) {
	    _classCallCheck(this, Oven);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Oven).call(this, game, 40, 304, 'oven'));
	
	    _this.xOrigin = 16;
	    _this.yOrigin = 280;
	
	    _this.game = game;
	    _this.gamestate = gamestate;
	    _this.formula = formula;
	
	    _this.alpha = 0.5;
	    _this.active = false;
	    _this.productionReady = false;
	
	    _this.productionStart = null;
	    _this.productionDuration = 1;
	
	    _this.enableBody = true;
	    _this.anchor.setTo(0.5);
	    _this.game.stage.addChild(_this);
	
	    _this.graphics = _this.game.add.graphics(0, 0);
	    _this.graphics.beginFill(0xFFFFFF);
	    _this.graphics.alpha = 0.5;
	    _this.graphics.drawRoundedRect(_this.xOrigin, _this.yOrigin, 160, 50, 5);
	
	    // Events
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
	
	    _this.setupText();
	
	    return _this;
	  }
	
	  _createClass(Oven, [{
	    key: 'onClick',
	    value: function onClick() {
	      if (this.active) {
	        if (this.productionStart == null) {
	          this.productionStart = this.game.time.now;
	        }
	        this.gamestate.ovens++;
	        this.gamestate.cookies -= this.formula.cost;
	        this.gamestate.productionRate += this.formula.productionRate;
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.gamestate.cookies >= this.formula.cost) {
	        this.active = true;
	        this.alpha = 1;
	      } else {
	        this.active = false;
	        this.alpha = 0.5;
	      }
	
	      this.counter.setText('x ' + this.gamestate.ovens);
	
	      if (this.productionStart) {
	        if (this.game.time.now - this.productionStart >= this.formula.speed) {
	          this.gamestate.cookies += this.gamestate.ovens;
	          this.productionStart = this.game.time.now;
	        }
	      }
	    }
	  }, {
	    key: 'setupText',
	    value: function setupText() {
	      this.counter = this.game.add.text(this.xOrigin + 120, this.y, 'x ' + this.gamestate.ovens, {
	        font: '19px Lobster',
	        fill: '#FFFFFF',
	        align: 'right'
	      });
	    }
	  }, {
	    key: 'onOver',
	    value: function onOver() {
	      if (this.active) {
	        this.game.canvas.style.cursor = "pointer";
	        this.scale.setTo(1.1);
	      }
	    }
	  }, {
	    key: 'onOut',
	    value: function onOut() {
	      if (this.active) {
	        this.game.canvas.style.cursor = "initial";
	        this.scale.setTo(1.0);
	      }
	    }
	  }]);
	
	  return Oven;
	}(Phaser.Sprite);
	
	exports.default = Oven;
	
	var formula = {
	  cost: 10,
	  productionRate: 0.5,
	  speed: 2000
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductionCounter = function () {
	  function ProductionCounter(game, gamestate) {
	    _classCallCheck(this, ProductionCounter);
	
	    this.game = game;
	    this.gamestate = gamestate;
	
	    this.prodRate = this.game.add.text(16, 16, '' + this.gamestate.productionRate, {
	      font: '26px Lobster',
	      fill: '#FFFFFF',
	      align: 'left'
	    });
	
	    this.prodRate.anchor.setTo(0, 0);
	  }
	
	  _createClass(ProductionCounter, [{
	    key: 'update',
	    value: function update() {
	      this.prodRate.setText('Rate \n ' + this.gamestate.productionRate + ' c/s');
	    }
	  }]);
	
	  return ProductionCounter;
	}();
	
	exports.default = ProductionCounter;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdmZTRhOGMwNWM0MTdjZTQ2NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9PdmVuLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUHJvZHVjdGlvbkNvdW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQ00sSUFBSTthQUFKLElBQUk7O0FBRVIsWUFGSSxJQUFJLEdBRU07MkJBRlYsSUFBSTs7d0VBQUosSUFBSSxhQUdBLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSTs7QUFDNUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsdUJBQWEsS0FBSyxDQUFDLENBQUM7QUFDOUMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMscUJBQVcsS0FBSyxDQUFDLENBQUM7QUFDMUMsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUM3Qjs7VUFQRyxJQUFJO0dBQVMsTUFBTSxDQUFDLElBQUk7O0FBVzlCLEtBQUksSUFBSSxFQUFFLEM7Ozs7Ozs7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QUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQzs7Z0JBZGtCLGlCQUFpQjs7OEJBZ0IzQjtBQUNQLFdBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxjQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxVQUFPO01BQ3RFOzs7VUFsQmtCLGlCQUFpQjs7O21CQUFqQixpQkFBaUIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI3ZmU0YThjMDVjNDE3Y2U0NjZiXG4gKiovIiwiXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gJy4vc3RhdGVzL0dhbWVTdGF0ZSc7XG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3N0YXRlcy9QcmVsb2FkJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigzODQsIDQ5NywgUGhhc2VyLkFVVE8sICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ0dhbWVTdGF0ZScsIEdhbWVTdGF0ZSwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQcmVsb2FkJywgUHJlbG9hZCwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgfVxuXG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBDb29raWUgZnJvbSAnLi4vbW9kZWxzL0Nvb2tpZSc7XG5pbXBvcnQgQ29va2llQ291bnRlciBmcm9tICcuLi9tb2RlbHMvQ29va2llQ291bnRlcic7XG5pbXBvcnQgUHJvZHVjdGlvbkNvdW50ZXIgZnJvbSAnLi4vbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyJztcblxuaW1wb3J0IE92ZW4gZnJvbSAnLi4vbW9kZWxzL092ZW4nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuY2VudGVyUG9zID0geyB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgfVxuICAgIHRoaXMuZ2FtZXN0YXRlID0ge1xuICAgICAgdGltZXNDbGlja2VkOiAwLFxuICAgICAgY29va2llczogMCxcbiAgICAgIG92ZW5zOiAwLFxuICAgICAgcHJvZHVjdGlvblJhdGU6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5nYW1lQmFja2dyb3VuZCA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWUodGhpcy5nYW1lLCB0aGlzLmNlbnRlclBvcy54LCAxNDAsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIgPSBuZXcgQ29va2llQ291bnRlcih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICB0aGlzLnByb2RDb3VudGVyICAgPSBuZXcgUHJvZHVjdGlvbkNvdW50ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWVzdGF0ZSk7XG5cbiAgICB0aGlzLm92ZW4gPSBuZXcgT3Zlbih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcblxuICAgIC8vIGxldCB0ZXh0ID0gbmV3IFJhaW5ib3dUZXh0KHRoaXMuZ2FtZSwgMCwgY2VudGVyLnkvMiwgXCItIHBoYXNlciAtXFxud2l0aCBhIHNwcmlua2xlIG9mXFxuRVM2IGR1c3QhXCIpO1xuICB9XG5cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jb29raWVDb3VudGVyLnVwZGF0ZSgpO1xuICAgIHRoaXMucHJvZENvdW50ZXIudXBkYXRlKCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9HYW1lU3RhdGUuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGdhbWVzdGF0ZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjb29raWUnKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKHBvaW50ZXIpID0+IHsgdGhpcy5vbkNsaWNrKHBvaW50ZXIpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7IHRoaXMub25PdmVyKCk7IH0pXG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4geyB0aGlzLm9uT3V0KCk7IH0pXG5cbiAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoMCwgMCwgMTApO1xuICAgIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdjb29raWUtcGFydGljbGUnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZ3Jhdml0eSA9IDA7XG4gICAgdGhpcy5lbWl0dGVyLnBhcnRpY2xlQnJpbmdUb1RvcCA9IHRydWU7XG4gICAgdGhpcy5lbWl0dGVyLnggPSB4O1xuICAgIHRoaXMuZW1pdHRlci55ID0geTtcbiAgICB0aGlzLmVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXQoNTAwLCAwKTtcbiAgICB0aGlzLmVtaXR0ZXIubWF4UGFydGljbGVTcGVlZC5zZXQoNTAwLCAwKTtcbiAgfVxuXG4gIG9uQ2xpY2socG9pbnRlcikge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG4gICAgdGhpcy5nYW1lc3RhdGUudGltZXNDbGlja2VkKys7XG4gICAgdGhpcy5nYW1lc3RhdGUuY29va2llcysrO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4wNSk7XG4gICAgdGhpcy5lbWl0dGVyLnNldEFscGhhKDAuNywgMCwgMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSwgODAwLCBudWxsLCAxKTtcbiAgfVxuXG4gIG9uT3ZlcigpIHtcbiAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4xKTtcbiAgfVxuXG4gIG9uT3V0KCkge1xuICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjApO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuYW5nbGUgKz0gMC40O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvQ29va2llLmpzXG4gKiovIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvdW50ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSAgICAgID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuXG4gICAgdGhpcy5jb29raWVDb3VudGVyID0gdGhpcy5nYW1lLmFkZC50ZXh0KDM2OCwgMTYsIGAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXN9YCwge1xuICAgICAgZm9udDogJzI2cHggTG9ic3RlcicsXG4gICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICBhbGlnbjogJ3JpZ2h0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb29raWVDb3VudGVyLmFuY2hvci5zZXRUbygxLCAwKTtcblxuICB9XG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIuc2V0VGV4dChgQ29va2llc1xcbiAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXN9YCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Db29raWVDb3VudGVyLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG4gICAgdGhpcy5wcmVsb2FkQmFyID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ICAgICAgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgLy8gdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJDNTE0Nic7XG4gICAgLy8gdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnLi9pbWFnZXMvYmFja2dyb3VuZC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Nvb2tpZScsICcuL2ltYWdlcy9jb29raWUucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdvdmVuJywgJy4vaW1hZ2VzL292ZW4ucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Nvb2tpZS1wYXJ0aWNsZScsICcuL2ltYWdlcy9jb29raWUtcGFydGljbGUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdHYW1lU3RhdGUnKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL1ByZWxvYWQuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZW4gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZSwgNDAsIDMwNCwgJ292ZW4nKTtcbiAgICB0aGlzLnhPcmlnaW4gPSAxNjtcbiAgICB0aGlzLnlPcmlnaW4gPSAyODA7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuICAgIHRoaXMuZm9ybXVsYSA9IGZvcm11bGE7XG5cbiAgICB0aGlzLmFscGhhID0gMC41O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wcm9kdWN0aW9uUmVhZHkgPSBmYWxzZTtcblxuICAgIHRoaXMucHJvZHVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICB0aGlzLnByb2R1Y3Rpb25EdXJhdGlvbiA9IDE7XG5cbiAgICB0aGlzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwwKTtcbiAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgdGhpcy5ncmFwaGljcy5hbHBoYSA9IDAuNTtcbiAgICB0aGlzLmdyYXBoaWNzLmRyYXdSb3VuZGVkUmVjdCh0aGlzLnhPcmlnaW4sIHRoaXMueU9yaWdpbiwgMTYwLCA1MCwgNSk7XG5cblxuICAgIC8vIEV2ZW50c1xuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKHBvaW50ZXIpID0+IHsgdGhpcy5vbkNsaWNrKHBvaW50ZXIpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7IHRoaXMub25PdmVyKCk7IH0pXG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4geyB0aGlzLm9uT3V0KCk7IH0pXG5cblxuICAgIHRoaXMuc2V0dXBUZXh0KCk7XG5cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5wcm9kdWN0aW9uU3RhcnQgPT0gbnVsbCkgeyB0aGlzLnByb2R1Y3Rpb25TdGFydCA9IHRoaXMuZ2FtZS50aW1lLm5vdzsgfVxuICAgICAgdGhpcy5nYW1lc3RhdGUub3ZlbnMrKztcbiAgICAgIHRoaXMuZ2FtZXN0YXRlLmNvb2tpZXMgLT0gdGhpcy5mb3JtdWxhLmNvc3Q7XG4gICAgICB0aGlzLmdhbWVzdGF0ZS5wcm9kdWN0aW9uUmF0ZSArPSB0aGlzLmZvcm11bGEucHJvZHVjdGlvblJhdGU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmdhbWVzdGF0ZS5jb29raWVzID49IHRoaXMuZm9ybXVsYS5jb3N0KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudGVyLnNldFRleHQoYHggJHt0aGlzLmdhbWVzdGF0ZS5vdmVuc31gKTtcblxuICAgIGlmICh0aGlzLnByb2R1Y3Rpb25TdGFydCkge1xuICAgICAgaWYgKCh0aGlzLmdhbWUudGltZS5ub3cgLSB0aGlzLnByb2R1Y3Rpb25TdGFydCkgPj0gdGhpcy5mb3JtdWxhLnNwZWVkKSB7XG4gICAgICAgIHRoaXMuZ2FtZXN0YXRlLmNvb2tpZXMgKz0gdGhpcy5nYW1lc3RhdGUub3ZlbnM7XG4gICAgICAgIHRoaXMucHJvZHVjdGlvblN0YXJ0ID0gdGhpcy5nYW1lLnRpbWUubm93O1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBzZXR1cFRleHQoKSB7XG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMueE9yaWdpbiArIDEyMCwgdGhpcy55LCBgeCAke3RoaXMuZ2FtZXN0YXRlLm92ZW5zfWAsIHtcbiAgICAgIGZvbnQ6ICcxOXB4IExvYnN0ZXInLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdyaWdodCdcbiAgICB9KTtcblxuICB9XG5cbiAgb25PdmVyKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4xKTtcbiAgICB9XG4gIH1cblxuICBvbk91dCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJpbml0aWFsXCI7XG4gICAgICB0aGlzLnNjYWxlLnNldFRvKDEuMCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5jb25zdCBmb3JtdWxhID0ge1xuICBjb3N0OiAxMCxcbiAgcHJvZHVjdGlvblJhdGU6IDAuNSxcbiAgc3BlZWQ6IDIwMDAsXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvT3Zlbi5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdGlvbkNvdW50ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSAgICAgID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuXG4gICAgdGhpcy5wcm9kUmF0ZSA9IHRoaXMuZ2FtZS5hZGQudGV4dCgxNiwgMTYsIGAke3RoaXMuZ2FtZXN0YXRlLnByb2R1Y3Rpb25SYXRlfWAsIHtcbiAgICAgIGZvbnQ6ICcyNnB4IExvYnN0ZXInLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdsZWZ0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9kUmF0ZS5hbmNob3Iuc2V0VG8oMCwgMCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wcm9kUmF0ZS5zZXRUZXh0KGBSYXRlIFxcbiAke3RoaXMuZ2FtZXN0YXRlLnByb2R1Y3Rpb25SYXRlfSBjL3NgKVxuICB9XG5cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==