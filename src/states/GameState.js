import Cookie from '../models/Cookie';
import CookieCounter from '../models/CookieCounter';
import ProductionCounter from '../models/ProductionCounter';

import Oven from '../models/Oven';


export default class GameState extends Phaser.State {

  create() {
    this.setupView();
    this.centerPos = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.savedGame = null;

    this.checkSaveGame();


    this.gameBackground = this.add.sprite(0, 0, 'game-background');

    this.cookie = new Cookie(this.game, this.centerPos.x, 140, this.gamestate);
    this.cookieCounter = new CookieCounter(this.game, this.gamestate);
    this.prodCounter   = new ProductionCounter(this.game, this.gamestate);

    this.oven = new Oven(this.game, this.gamestate);

    let that = this;

    this.game.input.keyboard.onDownCallback = function(event) {
      if (event.keyCode == 83) {
        console.log('Game Saved');
        localStorage.setItem('CookieClone', JSON.stringify(that.gamestate));
      }
    };

    // let text = new RainbowText(this.game, 0, center.y/2, "- phaser -\nwith a sprinkle of\nES6 dust!");
  }

  checkSaveGame() {
    this.savedGame = localStorage.getItem('CookieClone');
    console.log(this.savedGame);

    if (!this.savedGame || this.savedGame == "undefined") {
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

  setupView() {
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


  update() {
    this.cookieCounter.update();
    this.prodCounter.update();
  }
}
