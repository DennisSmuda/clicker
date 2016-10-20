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
	
	var _Preload = __webpack_require__(8);
	
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
	      this.setupView();
	      this.centerPos = { x: this.game.world.centerX, y: this.game.world.centerY };
	      this.savedGame = null;
	
	      this.checkSaveGame();
	
	      this.gameBackground = this.add.sprite(0, 0, 'game-background');
	
	      this.cookie = new _Cookie2.default(this.game, this.centerPos.x, 140, this.gamestate);
	      this.cookieCounter = new _CookieCounter2.default(this.game, this.gamestate);
	      this.prodCounter = new _ProductionCounter2.default(this.game, this.gamestate);
	
	      this.oven = new _Oven2.default(this.game, this.gamestate);
	
	      var that = this;
	
	      this.game.input.keyboard.onDownCallback = function (event) {
	        if (event.keyCode == 83) {
	          console.log('Game Saved');
	          localStorage.setItem('CookieClone', JSON.stringify(that.gamestate));
	        }
	      };
	
	      // let text = new RainbowText(this.game, 0, center.y/2, "- phaser -\nwith a sprinkle of\nES6 dust!");
	    }
	  }, {
	    key: 'checkSaveGame',
	    value: function checkSaveGame() {
	      this.savedGame = localStorage.getItem('CookieClone');
	      console.log(this.savedGame);
	
	      if (!this.savedGame || this.savedGame == "undefined") {
	        console.log('No Save');
	        this.gamestate = {
	          timesClicked: 0,
	          cookies: 0,
	          ovens: 0,
	          productionRate: 0
	        };
	      } else {
	        this.gamestate = JSON.parse(this.savedGame);
	      }
	    }
	  }, {
	    key: 'setupView',
	    value: function setupView() {
	      this.stage.disableVisibilityChange = true;
	      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	      this.scale.setMinMax(384, 497, 768, 994);
	      this.scale.pageAlignHorizontally = true;
	      this.scale.pageAlignVertically = true;
	
	      if (!this.game.device.desktop) {
	        this.scale.forceOrientation(true, false);
	        this.scale.setResizeCallback(this.gameResized, this);
	        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
	        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
	      }
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
	
	var _VisualTimer = __webpack_require__(6);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
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


/***/ },
/* 8 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzcyODk0MWFiMTZlM2I4NjlhYmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1Byb2R1Y3Rpb25Db3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvT3Zlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9WaXN1YWxUaW1lci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvUHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ2xDTSxJQUFJO2FBQUosSUFBSTs7QUFFUixZQUZJLElBQUksR0FFTTsyQkFGVixJQUFJOzt3RUFBSixJQUFJLGFBR0EsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJOztBQUc1QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyx1QkFBYSxLQUFLLENBQUMsQ0FBQztBQUM5QyxXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxxQkFBVyxLQUFLLENBQUMsQ0FBQztBQUMxQyxXQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FB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LE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTlELFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLDhCQUE4QixDQUFDLENBQUM7TUFDcEU7Ozs4QkFFUSxFQUVSOzs7OEJBRVE7QUFDUCxXQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO0FBQ3ZCLGFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGFBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CO01BQ0Y7OztVQWxDa0IsT0FBTztHQUFTLE1BQU0sQ0FBQyxLQUFLOzttQkFBNUIsT0FBTyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzcyODk0MWFiMTZlM2I4NjlhYmVcbiAqKi8iLCJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSAnLi9zdGF0ZXMvR2FtZVN0YXRlJztcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vc3RhdGVzL1ByZWxvYWQnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDM4NCwgNDk3LCBQaGFzZXIuQVVUTywgJ2NvbnRlbnQnLCBudWxsKTtcbiAgICBcblxuICAgIHRoaXMuc3RhdGUuYWRkKCdHYW1lU3RhdGUnLCBHYW1lU3RhdGUsIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgnUHJlbG9hZCcsIFByZWxvYWQsIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQcmVsb2FkJyk7XG4gIH1cblxufVxuXG5uZXcgR2FtZSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgQ29va2llIGZyb20gJy4uL21vZGVscy9Db29raWUnO1xuaW1wb3J0IENvb2tpZUNvdW50ZXIgZnJvbSAnLi4vbW9kZWxzL0Nvb2tpZUNvdW50ZXInO1xuaW1wb3J0IFByb2R1Y3Rpb25Db3VudGVyIGZyb20gJy4uL21vZGVscy9Qcm9kdWN0aW9uQ291bnRlcic7XG5cbmltcG9ydCBPdmVuIGZyb20gJy4uL21vZGVscy9PdmVuJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnNldHVwVmlldygpO1xuICAgIHRoaXMuY2VudGVyUG9zID0geyB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgfVxuICAgIHRoaXMuc2F2ZWRHYW1lID0gbnVsbDtcblxuICAgIHRoaXMuY2hlY2tTYXZlR2FtZSgpO1xuXG5cbiAgICB0aGlzLmdhbWVCYWNrZ3JvdW5kID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcblxuICAgIHRoaXMuY29va2llID0gbmV3IENvb2tpZSh0aGlzLmdhbWUsIHRoaXMuY2VudGVyUG9zLngsIDE0MCwgdGhpcy5nYW1lc3RhdGUpO1xuICAgIHRoaXMuY29va2llQ291bnRlciA9IG5ldyBDb29raWVDb3VudGVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lc3RhdGUpO1xuICAgIHRoaXMucHJvZENvdW50ZXIgICA9IG5ldyBQcm9kdWN0aW9uQ291bnRlcih0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcblxuICAgIHRoaXMub3ZlbiA9IG5ldyBPdmVuKHRoaXMuZ2FtZSwgdGhpcy5nYW1lc3RhdGUpO1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLm9uRG93bkNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDgzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIFNhdmVkJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDb29raWVDbG9uZScsIEpTT04uc3RyaW5naWZ5KHRoYXQuZ2FtZXN0YXRlKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGxldCB0ZXh0ID0gbmV3IFJhaW5ib3dUZXh0KHRoaXMuZ2FtZSwgMCwgY2VudGVyLnkvMiwgXCItIHBoYXNlciAtXFxud2l0aCBhIHNwcmlua2xlIG9mXFxuRVM2IGR1c3QhXCIpO1xuICB9XG5cbiAgY2hlY2tTYXZlR2FtZSgpIHtcbiAgICB0aGlzLnNhdmVkR2FtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDb29raWVDbG9uZScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2F2ZWRHYW1lKTtcblxuICAgIGlmICghdGhpcy5zYXZlZEdhbWUgfHzCoHRoaXMuc2F2ZWRHYW1lID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBTYXZlJyk7XG4gICAgICB0aGlzLmdhbWVzdGF0ZSA9IHtcbiAgICAgICAgdGltZXNDbGlja2VkOiAwLFxuICAgICAgICBjb29raWVzOiAwLFxuICAgICAgICBvdmVuczogMCxcbiAgICAgICAgcHJvZHVjdGlvblJhdGU6IDBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZXN0YXRlID0gSlNPTi5wYXJzZSh0aGlzLnNhdmVkR2FtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBWaWV3KCkge1xuICAgIHRoaXMuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcbiAgICB0aGlzLnNjYWxlLnNldE1pbk1heCgzODQsIDQ5NywgNzY4LCA5OTQpO1xuICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIHRoaXMuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlLCBmYWxzZSk7XG4gICAgICB0aGlzLnNjYWxlLnNldFJlc2l6ZUNhbGxiYWNrKHRoaXMuZ2FtZVJlc2l6ZWQsIHRoaXMpO1xuICAgICAgdGhpcy5zY2FsZS5lbnRlckluY29ycmVjdE9yaWVudGF0aW9uLmFkZCh0aGlzLmVudGVySW5jb3JyZWN0T3JpZW50YXRpb24sIHRoaXMpO1xuICAgICAgdGhpcy5zY2FsZS5sZWF2ZUluY29ycmVjdE9yaWVudGF0aW9uLmFkZCh0aGlzLmxlYXZlSW5jb3JyZWN0T3JpZW50YXRpb24sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY29va2llQ291bnRlci51cGRhdGUoKTtcbiAgICB0aGlzLnByb2RDb3VudGVyLnVwZGF0ZSgpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvR2FtZVN0YXRlLmpzXG4gKiovIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBnYW1lc3RhdGUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY29va2llJyk7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcbiAgICB0aGlzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG5cbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKChwb2ludGVyKSA9PiB7IHRoaXMub25DbGljayhwb2ludGVyKTsgfSlcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4geyB0aGlzLm9uT3ZlcigpOyB9KVxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHsgdGhpcy5vbk91dCgpOyB9KVxuXG4gICAgdGhpcy5lbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwKTtcbiAgICB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygnY29va2llLXBhcnRpY2xlJyk7XG4gICAgdGhpcy5lbWl0dGVyLmdyYXZpdHkgPSAwO1xuICAgIHRoaXMuZW1pdHRlci5wYXJ0aWNsZUJyaW5nVG9Ub3AgPSB0cnVlO1xuICAgIHRoaXMuZW1pdHRlci54ID0geDtcbiAgICB0aGlzLmVtaXR0ZXIueSA9IHk7XG4gICAgdGhpcy5lbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0KDUwMCwgMCk7XG4gICAgdGhpcy5lbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0KDUwMCwgMCk7XG5cbiAgfVxuXG4gIG9uQ2xpY2socG9pbnRlcikge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJyk7XG4gICAgdGhpcy5nYW1lc3RhdGUudGltZXNDbGlja2VkKys7XG4gICAgdGhpcy5nYW1lc3RhdGUuY29va2llcysrO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4wNSk7XG4gICAgdGhpcy5lbWl0dGVyLnNldEFscGhhKDAuNywgMCwgMjAwKTtcbiAgICB0aGlzLmVtaXR0ZXIuc3RhcnQodHJ1ZSwgODAwLCBudWxsLCAxKTtcbiAgfVxuXG4gIG9uT3ZlcigpIHtcbiAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4xKTtcbiAgfVxuXG4gIG9uT3V0KCkge1xuICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5zY2FsZS5zZXRUbygxLjApO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuYW5nbGUgKz0gMC40O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvQ29va2llLmpzXG4gKiovIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvdW50ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSAgICAgID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuXG4gICAgdGhpcy5jb29raWVDb3VudGVyID0gdGhpcy5nYW1lLmFkZC50ZXh0KDM2OCwgMTYsIGAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXN9YCwge1xuICAgICAgZm9udDogJzI2cHggTG9ic3RlcicsXG4gICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICBhbGlnbjogJ3JpZ2h0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb29raWVDb3VudGVyLmFuY2hvci5zZXRUbygxLCAwKTtcblxuICB9XG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNvb2tpZUNvdW50ZXIuc2V0VGV4dChgQ29va2llc1xcbiAke3RoaXMuZ2FtZXN0YXRlLmNvb2tpZXMudG9GaXhlZCgyKX1gKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL0Nvb2tpZUNvdW50ZXIuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3Rpb25Db3VudGVyIHtcblxuICBjb25zdHJ1Y3RvcihnYW1lLCBnYW1lc3RhdGUpIHtcbiAgICB0aGlzLmdhbWUgICAgICA9IGdhbWU7XG4gICAgdGhpcy5nYW1lc3RhdGUgPSBnYW1lc3RhdGU7XG5cblxuICAgIHRoaXMucHJvZFJhdGUgPSB0aGlzLmdhbWUuYWRkLnRleHQoMTYsIDE2LCBgJHt0aGlzLmdhbWVzdGF0ZS5wcm9kdWN0aW9uUmF0ZX1gLCB7XG4gICAgICBmb250OiAnMjZweCBMb2JzdGVyJyxcbiAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgIGFsaWduOiAnbGVmdCdcbiAgICB9KTtcblxuICAgIHRoaXMucHJvZFJhdGUuYW5jaG9yLnNldFRvKDAsIDApO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMucHJvZFJhdGUuc2V0VGV4dChgUmF0ZSBcXG4gJHt0aGlzLmdhbWVzdGF0ZS5wcm9kdWN0aW9uUmF0ZX0gYy9zYClcbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9Qcm9kdWN0aW9uQ291bnRlci5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxUaW1lciBmcm9tICcuLi91dGlsL1Zpc3VhbFRpbWVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVuIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHN1cGVyKGdhbWUsIDQwLCAzMDQsICdvdmVuJyk7XG4gICAgdGhpcy54T3JpZ2luID0gMTY7XG4gICAgdGhpcy55T3JpZ2luID0gMjgwO1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcbiAgICB0aGlzLmZvcm11bGEgPSBmb3JtdWxhO1xuXG4gICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnByb2R1Y3Rpb25SZWFkeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9uU3RhcnQgPSBudWxsO1xuICAgIHRoaXMucHJvZHVjdGlvbkR1cmF0aW9uID0gMTtcblxuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG5cbiAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLDApO1xuICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4RkZGRkZGKTtcbiAgICB0aGlzLmdyYXBoaWNzLmFscGhhID0gMC41O1xuICAgIHRoaXMuZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KHRoaXMueE9yaWdpbiwgdGhpcy55T3JpZ2luLCAxNjAsIDUwLCA1KTtcblxuXG4gICAgLy8gRXZlbnRzXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCgocG9pbnRlcikgPT4geyB0aGlzLm9uQ2xpY2socG9pbnRlcik7IH0pXG4gICAgdGhpcy5ldmVudHMub25JbnB1dE92ZXIuYWRkKCgpID0+IHsgdGhpcy5vbk92ZXIoKTsgfSlcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3V0LmFkZCgoKSA9PiB7IHRoaXMub25PdXQoKTsgfSlcblxuXG4gICAgdGhpcy5zZXR1cFRleHQoKTtcbiAgICB0aGlzLnNldHVwSW5kaWNhdG9yKCk7XG5cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAvLyBJbml0aWFsaXplIGZpcnN0IHN0YXJ0dXBcbiAgICAgIGlmICh0aGlzLnByb2R1Y3Rpb25TdGFydCA9PSBudWxsKSB7IHRoaXMucHJvZHVjdGlvblN0YXJ0ID0gdGhpcy5nYW1lLnRpbWUubm93OyB0aGlzLmluZGljYXRvci5zdGFydCgpOyB9XG5cbiAgICAgIHRoaXMuZ2FtZXN0YXRlLm92ZW5zKys7XG4gICAgICB0aGlzLmdhbWVzdGF0ZS5jb29raWVzIC09IHRoaXMuZm9ybXVsYS5jb3N0O1xuICAgICAgdGhpcy5nYW1lc3RhdGUucHJvZHVjdGlvblJhdGUgKz0gdGhpcy5mb3JtdWxhLnByb2R1Y3Rpb25SYXRlO1xuICAgICAgdGhpcy5mb3JtdWxhLmNvc3QgKz0gMjtcbiAgICAgIGxldCBuZXdDb3N0ID0gdGhpcy5mb3JtdWxhLmNvc3QgKiAoTWF0aC5wb3coMS4wNywgdGhpcy5nYW1lc3RhdGUub3ZlbnMpKTtcbiAgICAgIHRoaXMuZm9ybXVsYS5jb3N0ID0gbmV3Q29zdC50b0ZpeGVkKDIpO1xuICAgIH1cbiAgfVxuXG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5nYW1lc3RhdGUuY29va2llcyA+PSB0aGlzLmZvcm11bGEuY29zdCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudGVyLnNldFRleHQoYHggJHt0aGlzLmdhbWVzdGF0ZS5vdmVuc31gKTtcbiAgICB0aGlzLmNvc3Quc2V0VGV4dChgJHt0aGlzLmZvcm11bGEuY29zdH0gQ2ApO1xuXG4gICAgaWYgKHRoaXMucHJvZHVjdGlvblN0YXJ0KSB7XG4gICAgICBpZiAoKHRoaXMuZ2FtZS50aW1lLm5vdyAtIHRoaXMucHJvZHVjdGlvblN0YXJ0KSA+PSB0aGlzLmZvcm11bGEuc3BlZWQpIHtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUuY29va2llcyArPSB0aGlzLmdhbWVzdGF0ZS5vdmVucztcbiAgICAgICAgdGhpcy5wcm9kdWN0aW9uU3RhcnQgPSB0aGlzLmdhbWUudGltZS5ub3c7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXR1cFRleHQoKSB7XG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMueE9yaWdpbiArIDE1MCwgdGhpcy55LCBgeCAke3RoaXMuZ2FtZXN0YXRlLm92ZW5zfWAsIHtcbiAgICAgIGZvbnQ6ICcxOXB4IExvYnN0ZXInLFxuICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgYWxpZ246ICdyaWdodCdcbiAgICB9KTtcbiAgICB0aGlzLmNvc3QgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy54T3JpZ2luICsgMTUwLCB0aGlzLnkgLSAyMCwgYCR7dGhpcy5mb3JtdWxhLmNvc3R9YCwge1xuICAgICAgZm9udDogJzE5cHggTG9ic3RlcicsXG4gICAgICBmaWxsOiAnI2Q1NDA0YicsXG4gICAgICBhbGlnbjogJ3JpZ2h0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb3VudGVyLmFuY2hvci5zZXRUbygxLCAwKTtcbiAgICB0aGlzLmNvc3QuYW5jaG9yLnNldFRvKDEsIDApO1xuICAgIHRoaXMuY29zdC5hbHBoYSA9IDAuNTtcbiAgfVxuXG4gIHNldHVwSW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaW5kaWNhdG9yID0gbmV3IFZpc3VhbFRpbWVyKHtcbiAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgIHg6IHRoaXMueE9yaWdpbixcbiAgICAgIHk6IHRoaXMueU9yaWdpbis1MCxcbiAgICAgIHNlY29uZHM6IDIsXG4gICAgICB0eXBlOiAndXAnLFxuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaW1lciBDb21wbGV0ZScpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbk92ZXIoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgdGhpcy5zY2FsZS5zZXRUbygxLjEpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3V0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImluaXRpYWxcIjtcbiAgICAgIHRoaXMuc2NhbGUuc2V0VG8oMS4wKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmF0ZShzdGF0dXMpIHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuY29zdC5maWxsID0gJyNGRkZGRkYnO1xuICAgICAgdGhpcy5jb3N0LmFscGhhID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XG4gICAgICB0aGlzLmNvc3QuZmlsbCA9ICcjRDU0MDRCJztcbiAgICAgIHRoaXMuY29zdC5hbHBoYSA9IDAuNTtcbiAgICB9XG5cbiAgfVxufVxuXG5cbmNvbnN0IGZvcm11bGEgPSB7XG4gIGNvc3Q6IDEwLFxuICBwcm9kdWN0aW9uUmF0ZTogMC41LFxuICBzcGVlZDogMjAwMCxcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9PdmVuLmpzXG4gKiovIiwiKGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRmdW5jdGlvbiBWaXN1YWxUaW1lcihvcHRzKSB7XG5cdFx0dGhpcy50eXBlID0gJ2Rvd24nO1xuXHRcdGlmIChvcHRzLnR5cGUpIHtcblx0XHRcdHRoaXMudHlwZSA9IG9wdHMudHlwZTtcblx0XHR9XG5cdFx0dGhpcy50b3RhbFRpbWUgPSBvcHRzLnNlY29uZHM7XG5cdFx0dGhpcy5nYW1lID0gb3B0cy5nYW1lO1xuXHRcdHRoaXMub25Db21wbGV0ZSA9IG9wdHMub25Db21wbGV0ZTtcblx0XHR2YXIga2V5ID0gJ3RpbWVyJztcblx0XHRpZiAob3B0cy5rZXkpIHtcblx0XHRcdGtleSA9IG9wdHMua2V5O1xuXHRcdH1cblx0XHR0aGlzLmdhbWUuYWRkLnNwcml0ZShvcHRzLngsIG9wdHMueSwga2V5LCAxKTtcblx0XHR0aGlzLnNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKG9wdHMueCwgb3B0cy55LCBrZXksIDApO1xuXHRcdHRoaXMuZnVsbFdpZHRoID0gdGhpcy5zcHJpdGUud2lkdGg7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cblx0VmlzdWFsVGltZXIucHJvdG90eXBlID0ge1xuXHRcdHJlc2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLnRpbWVyKSB7XG5cdFx0XHRcdHRoaXMudGltZXIuc3RvcCgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpcy5oYXNGaW5pc2hlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy50aW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZSh0cnVlKTtcblx0XHRcdHRoaXMudGltZXIucmVwZWF0KFBoYXNlci5UaW1lci5TRUNPTkQsIHRoaXMudG90YWxUaW1lLCB0aW1lclRpY2ssIHRoaXMpO1xuXHRcdFx0dGhpcy50aW1lci5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5oYXNGaW5pc2hlZCA9IHRydWU7XG5cdFx0XHRcdGlmIChzZWxmLm9uQ29tcGxldGUpIHtcblx0XHRcdFx0XHRzZWxmLm9uQ29tcGxldGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnJlY3QgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAwLCAwLCB0aGlzLnNwcml0ZS5oZWlnaHQpO1xuXHRcdFx0aWYgKHRoaXMudHlwZSA9PSAnZG93bicpIHtcblx0XHRcdFx0dGhpcy5zcHJpdGUuY3JvcChudWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3ByaXRlLmNyb3AodGhpcy5yZWN0KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0VGltZTogZnVuY3Rpb24oc2Vjb25kcykge1xuXHRcdFx0dGhpcy50b3RhbFRpbWUgPSBzZWNvbmRzO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH0sXG5cblx0XHRzdGFydDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0XHR0aGlzLnRpbWVyLnN0YXJ0KCk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy50aW1lci5zdG9wKCk7XG5cdFx0fSxcblxuXHRcdHBhdXNlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudGltZXIucGF1c2UoKTtcblx0XHR9LFxuXG5cdFx0cmVzdW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudGltZXIucmVzdW1lKCk7XG5cdFx0fSxcblxuXHRcdHJlbWFpbmluZ1RpbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lIC0gdGhpcy50aW1lci5zZWNvbmRzO1xuXHRcdH1cblx0fTtcblxuXG5cdGZ1bmN0aW9uIHRpbWVyVGljaygpIHtcblx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuXHRcdHZhciBteVRpbWUgPSAodGhpcy50eXBlID09ICdkb3duJykgPyB0aGlzLnJlbWFpbmluZ1RpbWUoKSA6IHRoaXMudGltZXIuc2Vjb25kcztcblx0XHR0aGlzLnJlY3Qud2lkdGggPSBNYXRoLm1heCgwLCAobXlUaW1lIC8gdGhpcy50b3RhbFRpbWUpICogdGhpcy5mdWxsV2lkdGgpO1xuXHRcdHRoaXMuc3ByaXRlLmNyb3AodGhpcy5yZWN0KTtcblx0fVxuXG5cblx0aWYgKG1vZHVsZSkge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gVmlzdWFsVGltZXI7XG5cdH1cbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1Zpc3VhbFRpbWVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xuICAgIHRoaXMucHJlbG9hZEJhciA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSAgICAgID0gZmFsc2U7XG5cbiAgICBcblxuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvLyB0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMkM1MTQ2JztcbiAgICAvLyB0aGlzLmxvYWQuaW1hZ2UoJ2dhbWUtYmFja2dyb3VuZCcsICdhc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dhbWUtYmFja2dyb3VuZCcsICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnY29va2llJywgJy4vaW1hZ2VzL2Nvb2tpZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ292ZW4nLCAnLi9pbWFnZXMvb3Zlbi5wbmcnKTtcblxuICAgIC8vIFRpbWVyIFNwcml0ZXNoZWV0XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aW1lcicsICcuL2ltYWdlcy90aW1lci5wbmcnLCAxNTAsIDIwKTtcblxuICAgIHRoaXMubG9hZC5pbWFnZSgnY29va2llLXBhcnRpY2xlJywgJy4vaW1hZ2VzL2Nvb2tpZS1wYXJ0aWNsZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ0dhbWVTdGF0ZScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvUHJlbG9hZC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=