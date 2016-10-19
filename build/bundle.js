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
	
	var _Preload = __webpack_require__(6);
	
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
	
	var _ProductionCounter = __webpack_require__(4);
	
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
	      this.cookieCounter.setText('Cookies\n ' + this.gamestate.cookies.toFixed(2));
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VisualTimer = __webpack_require__(7);
	
	var _VisualTimer2 = _interopRequireDefault(_VisualTimer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	    _this.alpha = 0;
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
	    _this.setupIndicator();
	
	    return _this;
	  }
	
	  _createClass(Oven, [{
	    key: 'onClick',
	    value: function onClick() {
	      if (this.active) {
	        // Initialize first startup
	        if (this.productionStart == null) {
	          this.productionStart = this.game.time.now;this.indicator.start();
	        }
	
	        this.gamestate.ovens++;
	        this.gamestate.cookies -= this.formula.cost;
	        this.gamestate.productionRate += this.formula.productionRate;
	        this.formula.cost += 2;
	        var newCost = this.formula.cost * Math.pow(1.07, this.gamestate.ovens);
	        this.formula.cost = newCost.toFixed(2);
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.gamestate.cookies >= this.formula.cost) {
	        this.activate(true);
	      } else {
	        this.activate(false);
	      }
	
	      this.counter.setText('x ' + this.gamestate.ovens);
	      this.cost.setText(this.formula.cost + ' C');
	
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
	      this.counter = this.game.add.text(this.xOrigin + 150, this.y, 'x ' + this.gamestate.ovens, {
	        font: '19px Lobster',
	        fill: '#FFFFFF',
	        align: 'right'
	      });
	      this.cost = this.game.add.text(this.xOrigin + 150, this.y - 20, '' + this.formula.cost, {
	        font: '19px Lobster',
	        fill: '#d5404b',
	        align: 'right'
	      });
	
	      this.counter.anchor.setTo(1, 0);
	      this.cost.anchor.setTo(1, 0);
	      this.cost.alpha = 0.5;
	    }
	  }, {
	    key: 'setupIndicator',
	    value: function setupIndicator() {
	      this.indicator = new _VisualTimer2.default({
	        game: this.game,
	        x: this.xOrigin,
	        y: this.yOrigin + 50,
	        seconds: 2,
	        type: 'up',
	        onComplete: function onComplete() {
	          console.log('Timer Complete');
	          this.start();
	        }
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
	  }, {
	    key: 'activate',
	    value: function activate(status) {
	      if (status) {
	        this.active = true;
	        this.alpha = 1;
	        this.cost.fill = '#FFFFFF';
	        this.cost.alpha = 1;
	      } else {
	        this.active = false;
	        this.alpha = 0.5;
	        this.cost.fill = '#D5404B';
	        this.cost.alpha = 0.5;
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
	
	      // Timer Spritesheet
	      this.load.spritesheet('timer', './images/timer.png', 150, 20);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	(function () {
		"use strict";
	
		function VisualTimer(opts) {
			this.type = 'down';
			if (opts.type) {
				this.type = opts.type;
			}
			this.totalTime = opts.seconds;
			this.game = opts.game;
			this.onComplete = opts.onComplete;
			var key = 'timer';
			if (opts.key) {
				key = opts.key;
			}
			this.game.add.sprite(opts.x, opts.y, key, 1);
			this.sprite = this.game.add.sprite(opts.x, opts.y, key, 0);
			this.fullWidth = this.sprite.width;
			this.reset();
		}
	
		VisualTimer.prototype = {
			reset: function reset() {
				if (this.timer) {
					this.timer.stop();
				}
				var self = this;
				this.hasFinished = false;
				this.timer = this.game.time.create(true);
				this.timer.repeat(Phaser.Timer.SECOND, this.totalTime, timerTick, this);
				this.timer.onComplete.add(function () {
					self.hasFinished = true;
					if (self.onComplete) {
						self.onComplete();
					}
				});
				this.rect = new Phaser.Rectangle(0, 0, 0, this.sprite.height);
				if (this.type == 'down') {
					this.sprite.crop(null);
				} else {
					this.sprite.crop(this.rect);
				}
			},
	
			setTime: function setTime(seconds) {
				this.totalTime = seconds;
				this.reset();
			},
	
			start: function start() {
				this.reset();
				this.timer.start();
			},
	
			stop: function stop() {
				this.timer.stop();
			},
	
			pause: function pause() {
				this.timer.pause();
			},
	
			resume: function resume() {
				this.timer.resume();
			},
	
			remainingTime: function remainingTime() {
				return this.totalTime - this.timer.seconds;
			}
		};
	
		function timerTick() {
			/*jshint validthis:true */
			var myTime = this.type == 'down' ? this.remainingTime() : this.timer.seconds;
			this.rect.width = Math.max(0, myTime / this.totalTime * this.fullWidth);
			this.sprite.crop(this.rect);
		}
	
		if (module) {
			module.exports = VisualTimer;
		}
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjk2OThhZDE5NjliODhlNTE5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvT3Zlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVmlzdWFsVGltZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ2xDTSxJQUFJO2FBQUosSUFBSTs7QUFFUixZQUZJLElBQUksR0FFTTsyQkFGVixJQUFJOzt3RUFBSixJQUFJLGFBR0EsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJOztBQUM1QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyx1QkFBYSxLQUFLLENBQUMsQ0FBQztBQUM5QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxxQkFBVyxLQUFLLENBQUMsQ0FBQztBQUMxQyxXQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FB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QUksRUFBRSxnQkFBVztBQUNoQixRQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCOztBQUVELFFBQUssRUFBRSxpQkFBVztBQUNqQixRQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25COztBQUVELFNBQU0sRUFBRSxrQkFBVztBQUNsQixRQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCOztBQUVELGdCQUFhLEVBQUUseUJBQVc7QUFDekIsV0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzNDO0dBQ0QsQ0FBQzs7QUFHRixXQUFTLFNBQVMsR0FBRzs7QUFFcEIsT0FBSSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQy9FLE9BQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRSxPQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBR0QsTUFBSSxNQUFNLEVBQUU7QUFDWCxTQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztHQUM3QjtFQUNELEdBQUcsQzs7Ozs7OztBQ25GSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI5Njk4YWQxOTY5Yjg4ZTUxOTllXG4gKiovIiwiXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gJy4vc3RhdGVzL0dhbWVTdGF0ZSc7XG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3N0YXRlcy9QcmVsb2FkJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigzODQsIDQ5NywgUGhhc2VyLkFVVE8sICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ0dhbWVTdGF0ZScsIEdhbWVTdGF0ZSwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdQcmVsb2FkJywgUHJlbG9hZCwgZmFsc2UpO1xuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ1ByZWxvYWQnKTtcbiAgfVxuXG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBDb29raWUgZnJvbSAnLi4vbW9kZWxzL0Nvb2tpZSc7XG5pbXBvcnQgQ29va2llQ291bnRlciBmcm9tICcuLi9tb2RlbHMvQ29va2llQ291bnRlcic7XG5pbXBvcnQgUHJvZHVjdGlvbkNvdW50ZXIgZnJvbSAnLi4vbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyJztcblxuaW1wb3J0IE92ZW4gZnJvbSAnLi4vbW9kZWxzL092ZW4nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuY2VudGVyUG9zID0geyB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgfVxuICAgIHRoaXMuZ2FtZXN0YXRlID0ge1xuICAgICAgdGltZXNDbGlja2VkOiAwLFxuICAgICAgY29va2llczogMCxcbiAgICAgIG92ZW5zOiAwLFxuICAgICAgcHJvZHVjdGlvblJhdGU6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5nYW1lQmFja2dyb3VuZCA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWUodGhpcy5nYW1lLCB0aGlzLmNlbnRlclBvcy54LCAxNDAsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIgPSBuZXcgQ29va2llQ291bnRlcih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICB0aGlzLnByb2RDb3VudGVyICAgPSBuZXcgUHJvZHVjdGlvbkNvdW50ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWVzdGF0ZSk7XG5cbiAgICB0aGlzLm92ZW4gPSBuZXcgT3Zlbih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcblxuICAgIC8vIGxldCB0ZXh0ID0gbmV3IFJhaW5ib3dUZXh0KHRoaXMuZ2FtZSwgMCwgY2VudGVyLnkvMiwgXCItIHBoYXNlciAtXFxud2l0aCBhIHNwcmlua2xlIG9mXFxuRVM2IGR1c3QhXCIpO1xuICB9XG5cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jb29raWVDb3VudGVyLnVwZGF0ZSgpO1xuICAgIHRoaXMucHJvZENvdW50ZXIudXBkYXRlKCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9HYW1lU3RhdGUuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGdhbWVzdGF0ZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjb29raWUnKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKHBvaW50ZXIpID0+IHsgdGhpcy5vbkNsaWNrKHBvaW50ZXIpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7IHRoaXMub25PdmVyKCk7IH0pXG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4geyB0aGlzLm9uT3V0KCk7IH0pXG5cbiAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIoMCwgMCwgMTApO1xuICAgIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdjb29raWUtcGFydGljbGUnKTtcbiAgICB0aGlzLmVtaXR0ZXIuZ3Jhdml0eSA9IDA7XG4gICAgdGhpcy5lbWl0dGVyLnBhcnRpY2xlQnJpbmdUb1RvcCA9IHRydWU7XG4gICAgdGhpcy5lbWl0dGVyLnggPSB4O1xuICAgIHRoaXMuZW1pdHRlci55ID0geTtcbiAgICB0aGlzLmVtaXR0ZXIubWluUGFydGljbGVTcGVlZC5zZXQoNTAwLCAwKTtcbiAgICB0aGlzLmVtaXR0ZXIubWF4UGFydGljbGVTcGVlZC5zZXQoNTAwLCAwKTtcblxuICB9XG5cbiAgb25DbGljayhwb2ludGVyKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQnKTtcbiAgICB0aGlzLmdhbWVzdGF0ZS50aW1lc0NsaWNrZWQrKztcbiAgICB0aGlzLmdhbWVzdGF0ZS5jb29raWVzKys7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjA1KTtcbiAgICB0aGlzLmVtaXR0ZXIuc2V0QWxwaGEoMC43LCAwLCAyMDApO1xuICAgIHRoaXMuZW1pdHRlci5zdGFydCh0cnVlLCA4MDAsIG51bGwsIDEpO1xuICB9XG5cbiAgb25PdmVyKCkge1xuICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjEpO1xuICB9XG5cbiAgb25PdXQoKSB7XG4gICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImluaXRpYWxcIjtcbiAgICB0aGlzLnNjYWxlLnNldFRvKDEuMCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5hbmdsZSArPSAwLjQ7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Db29raWUuanNcbiAqKi8iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQ291bnRlciB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgdGhpcy5nYW1lICAgICAgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuXG5cbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIgPSB0aGlzLmdhbWUuYWRkLnRleHQoMzY4LCAxNiwgYCR7dGhpcy5nYW1lc3RhdGUuY29va2llc31gLCB7XG4gICAgICBmb250OiAnMjZweCBMb2JzdGVyJyxcbiAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgIGFsaWduOiAncmlnaHQnXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIuYW5jaG9yLnNldFRvKDEsIDApO1xuXG4gIH1cblxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY29va2llQ291bnRlci5zZXRUZXh0KGBDb29raWVzXFxuICR7dGhpcy5nYW1lc3RhdGUuY29va2llcy50b0ZpeGVkKDIpfWApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvQ29va2llQ291bnRlci5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdGlvbkNvdW50ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSAgICAgID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuXG4gICAgdGhpcy5wcm9kUmF0ZSA9IHRoaXMuZ2FtZS5hZGQudGV4dCgxNiwgMTYsIGAke3RoaXMuZ2FtZXN0YXRlLnByb2R1Y3Rpb25SYXRlfWAsIHtcbiAgICAgIGZvbnQ6ICcyNnB4IExvYnN0ZXInLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdsZWZ0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9kUmF0ZS5hbmNob3Iuc2V0VG8oMCwgMCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5wcm9kUmF0ZS5zZXRUZXh0KGBSYXRlIFxcbiAke3RoaXMuZ2FtZXN0YXRlLnByb2R1Y3Rpb25SYXRlfSBjL3NgKVxuICB9XG5cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbFRpbWVyIGZyb20gJy4uL3V0aWwvVmlzdWFsVGltZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZW4gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZSwgNDAsIDMwNCwgJ292ZW4nKTtcbiAgICB0aGlzLnhPcmlnaW4gPSAxNjtcbiAgICB0aGlzLnlPcmlnaW4gPSAyODA7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuICAgIHRoaXMuZm9ybXVsYSA9IGZvcm11bGE7XG5cbiAgICB0aGlzLmFscGhhID0gMDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJvZHVjdGlvblJlYWR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0aW9uRHVyYXRpb24gPSAxO1xuXG4gICAgdGhpcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsMCk7XG4gICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoMHhGRkZGRkYpO1xuICAgIHRoaXMuZ3JhcGhpY3MuYWxwaGEgPSAwLjU7XG4gICAgdGhpcy5ncmFwaGljcy5kcmF3Um91bmRlZFJlY3QodGhpcy54T3JpZ2luLCB0aGlzLnlPcmlnaW4sIDE2MCwgNTAsIDUpO1xuXG5cbiAgICAvLyBFdmVudHNcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKChwb2ludGVyKSA9PiB7IHRoaXMub25DbGljayhwb2ludGVyKTsgfSlcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4geyB0aGlzLm9uT3ZlcigpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHsgdGhpcy5vbk91dCgpOyB9KVxuXG5cbiAgICB0aGlzLnNldHVwVGV4dCgpO1xuICAgIHRoaXMuc2V0dXBJbmRpY2F0b3IoKTtcblxuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIC8vIEluaXRpYWxpemUgZmlyc3Qgc3RhcnR1cFxuICAgICAgaWYgKHRoaXMucHJvZHVjdGlvblN0YXJ0ID09IG51bGwpIHsgdGhpcy5wcm9kdWN0aW9uU3RhcnQgPSB0aGlzLmdhbWUudGltZS5ub3c7IHRoaXMuaW5kaWNhdG9yLnN0YXJ0KCk7IH1cblxuICAgICAgdGhpcy5nYW1lc3RhdGUub3ZlbnMrKztcbiAgICAgIHRoaXMuZ2FtZXN0YXRlLmNvb2tpZXMgLT0gdGhpcy5mb3JtdWxhLmNvc3Q7XG4gICAgICB0aGlzLmdhbWVzdGF0ZS5wcm9kdWN0aW9uUmF0ZSArPSB0aGlzLmZvcm11bGEucHJvZHVjdGlvblJhdGU7XG4gICAgICB0aGlzLmZvcm11bGEuY29zdCArPSAyO1xuICAgICAgbGV0IG5ld0Nvc3QgPSB0aGlzLmZvcm11bGEuY29zdCAqIChNYXRoLnBvdygxLjA3LCB0aGlzLmdhbWVzdGF0ZS5vdmVucykpO1xuICAgICAgdGhpcy5mb3JtdWxhLmNvc3QgPSBuZXdDb3N0LnRvRml4ZWQoMik7XG4gICAgfVxuICB9XG5cblxuXG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmdhbWVzdGF0ZS5jb29raWVzID49IHRoaXMuZm9ybXVsYS5jb3N0KSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvdW50ZXIuc2V0VGV4dChgeCAke3RoaXMuZ2FtZXN0YXRlLm92ZW5zfWApO1xuICAgIHRoaXMuY29zdC5zZXRUZXh0KGAke3RoaXMuZm9ybXVsYS5jb3N0fSBDYCk7XG5cbiAgICBpZiAodGhpcy5wcm9kdWN0aW9uU3RhcnQpIHtcbiAgICAgIGlmICgodGhpcy5nYW1lLnRpbWUubm93IC0gdGhpcy5wcm9kdWN0aW9uU3RhcnQpID49IHRoaXMuZm9ybXVsYS5zcGVlZCkge1xuICAgICAgICB0aGlzLmdhbWVzdGF0ZS5jb29raWVzICs9IHRoaXMuZ2FtZXN0YXRlLm92ZW5zO1xuICAgICAgICB0aGlzLnByb2R1Y3Rpb25TdGFydCA9IHRoaXMuZ2FtZS50aW1lLm5vdztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHNldHVwVGV4dCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy54T3JpZ2luICsgMTUwLCB0aGlzLnksIGB4ICR7dGhpcy5nYW1lc3RhdGUub3ZlbnN9YCwge1xuICAgICAgZm9udDogJzE5cHggTG9ic3RlcicsXG4gICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICBhbGlnbjogJ3JpZ2h0J1xuICAgIH0pO1xuICAgIHRoaXMuY29zdCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLnhPcmlnaW4gKyAxNTAsIHRoaXMueSAtIDIwLCBgJHt0aGlzLmZvcm11bGEuY29zdH1gLCB7XG4gICAgICBmb250OiAnMTlweCBMb2JzdGVyJyxcbiAgICAgIGZpbGw6ICcjZDU0MDRiJyxcbiAgICAgIGFsaWduOiAncmlnaHQnXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvdW50ZXIuYW5jaG9yLnNldFRvKDEsIDApO1xuICAgIHRoaXMuY29zdC5hbmNob3Iuc2V0VG8oMSwgMCk7XG4gICAgdGhpcy5jb3N0LmFscGhhID0gMC41O1xuICB9XG5cbiAgc2V0dXBJbmRpY2F0b3IoKSB7XG4gICAgdGhpcy5pbmRpY2F0b3IgPSBuZXcgVmlzdWFsVGltZXIoe1xuICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgeDogdGhpcy54T3JpZ2luLFxuICAgICAgeTogdGhpcy55T3JpZ2luKzUwLFxuICAgICAgc2Vjb25kczogMixcbiAgICAgIHR5cGU6ICd1cCcsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RpbWVyIENvbXBsZXRlJyk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uT3ZlcigpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICB0aGlzLnNjYWxlLnNldFRvKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgb25PdXQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiaW5pdGlhbFwiO1xuICAgICAgdGhpcy5zY2FsZS5zZXRUbygxLjApO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlKHN0YXR1cykge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgICAgdGhpcy5jb3N0LmZpbGwgPSAnI0ZGRkZGRic7XG4gICAgICB0aGlzLmNvc3QuYWxwaGEgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcbiAgICAgIHRoaXMuY29zdC5maWxsID0gJyNENTQwNEInO1xuICAgICAgdGhpcy5jb3N0LmFscGhhID0gMC41O1xuICAgIH1cblxuICB9XG59XG5cblxuY29uc3QgZm9ybXVsYSA9IHtcbiAgY29zdDogMTAsXG4gIHByb2R1Y3Rpb25SYXRlOiAwLjUsXG4gIHNwZWVkOiAyMDAwLFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL092ZW4uanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcbiAgICB0aGlzLnByZWxvYWRCYXIgPSBudWxsO1xuICAgIHRoaXMucmVhZHkgICAgICA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvLyB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMkM1MTQ2JztcbiAgICAvLyB0aGlzLmxvYWQuaW1hZ2UoJ2dhbWUtYmFja2dyb3VuZCcsICdhc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dhbWUtYmFja2dyb3VuZCcsICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnY29va2llJywgJy4vaW1hZ2VzL2Nvb2tpZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ292ZW4nLCAnLi9pbWFnZXMvb3Zlbi5wbmcnKTtcblxuICAgIC8vIFRpbWVyIFNwcml0ZXNoZWV0XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aW1lcicsICcuL2ltYWdlcy90aW1lci5wbmcnLCAxNTAsIDIwKTtcblxuICAgIHRoaXMubG9hZC5pbWFnZSgnY29va2llLXBhcnRpY2xlJywgJy4vaW1hZ2VzL2Nvb2tpZS1wYXJ0aWNsZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWVTdGF0ZScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvUHJlbG9hZC5qc1xuICoqLyIsIihmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZnVuY3Rpb24gVmlzdWFsVGltZXIob3B0cykge1xuXHRcdHRoaXMudHlwZSA9ICdkb3duJztcblx0XHRpZiAob3B0cy50eXBlKSB7XG5cdFx0XHR0aGlzLnR5cGUgPSBvcHRzLnR5cGU7XG5cdFx0fVxuXHRcdHRoaXMudG90YWxUaW1lID0gb3B0cy5zZWNvbmRzO1xuXHRcdHRoaXMuZ2FtZSA9IG9wdHMuZ2FtZTtcblx0XHR0aGlzLm9uQ29tcGxldGUgPSBvcHRzLm9uQ29tcGxldGU7XG5cdFx0dmFyIGtleSA9ICd0aW1lcic7XG5cdFx0aWYgKG9wdHMua2V5KSB7XG5cdFx0XHRrZXkgPSBvcHRzLmtleTtcblx0XHR9XG5cdFx0dGhpcy5nYW1lLmFkZC5zcHJpdGUob3B0cy54LCBvcHRzLnksIGtleSwgMSk7XG5cdFx0dGhpcy5zcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShvcHRzLngsIG9wdHMueSwga2V5LCAwKTtcblx0XHR0aGlzLmZ1bGxXaWR0aCA9IHRoaXMuc3ByaXRlLndpZHRoO1xuXHRcdHRoaXMucmVzZXQoKTtcblx0fVxuXG5cdFZpc3VhbFRpbWVyLnByb3RvdHlwZSA9IHtcblx0XHRyZXNldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHR0aGlzLnRpbWVyLnN0b3AoKTtcblx0XHRcdH1cblx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuaGFzRmluaXNoZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMudGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUodHJ1ZSk7XG5cdFx0XHR0aGlzLnRpbWVyLnJlcGVhdChQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLnRvdGFsVGltZSwgdGltZXJUaWNrLCB0aGlzKTtcblx0XHRcdHRoaXMudGltZXIub25Db21wbGV0ZS5hZGQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuaGFzRmluaXNoZWQgPSB0cnVlO1xuXHRcdFx0XHRpZiAoc2VsZi5vbkNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0c2VsZi5vbkNvbXBsZXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5yZWN0ID0gbmV3IFBoYXNlci5SZWN0YW5nbGUoMCwgMCwgMCwgdGhpcy5zcHJpdGUuaGVpZ2h0KTtcblx0XHRcdGlmICh0aGlzLnR5cGUgPT0gJ2Rvd24nKSB7XG5cdFx0XHRcdHRoaXMuc3ByaXRlLmNyb3AobnVsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNwcml0ZS5jcm9wKHRoaXMucmVjdCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldFRpbWU6IGZ1bmN0aW9uKHNlY29uZHMpIHtcblx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kcztcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9LFxuXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0dGhpcy50aW1lci5zdGFydCgpO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudGltZXIuc3RvcCgpO1xuXHRcdH0sXG5cblx0XHRwYXVzZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnRpbWVyLnBhdXNlKCk7XG5cdFx0fSxcblxuXHRcdHJlc3VtZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnRpbWVyLnJlc3VtZSgpO1xuXHRcdH0sXG5cblx0XHRyZW1haW5pbmdUaW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvdGFsVGltZSAtIHRoaXMudGltZXIuc2Vjb25kcztcblx0XHR9XG5cdH07XG5cblxuXHRmdW5jdGlvbiB0aW1lclRpY2soKSB7XG5cdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0XHR2YXIgbXlUaW1lID0gKHRoaXMudHlwZSA9PSAnZG93bicpID8gdGhpcy5yZW1haW5pbmdUaW1lKCkgOiB0aGlzLnRpbWVyLnNlY29uZHM7XG5cdFx0dGhpcy5yZWN0LndpZHRoID0gTWF0aC5tYXgoMCwgKG15VGltZSAvIHRoaXMudG90YWxUaW1lKSAqIHRoaXMuZnVsbFdpZHRoKTtcblx0XHR0aGlzLnNwcml0ZS5jcm9wKHRoaXMucmVjdCk7XG5cdH1cblxuXG5cdGlmIChtb2R1bGUpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFZpc3VhbFRpbWVyO1xuXHR9XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9WaXN1YWxUaW1lci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9