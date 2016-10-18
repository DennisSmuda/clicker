import Cookie from '../models/Cookie';
import CookieCounter from '../models/CookieCounter';
import ProductionCounter from '../models/ProductionCounter';

import Oven from '../models/Oven';


export default class GameState extends Phaser.State {

  create() {
    this.centerPos = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.gamestate = {
      timesClicked: 0,
      cookies: 0,
      ovens: 0,
      productionRate: 0
    };

    this.gameBackground = this.add.sprite(0, 0, 'game-background');

    this.cookie = new Cookie(this.game, this.centerPos.x, 140, this.gamestate);
    this.cookieCounter = new CookieCounter(this.game, this.gamestate);
    this.prodCounter   = new ProductionCounter(this.game, this.gamestate);

    this.oven = new Oven(this.game, this.gamestate);

    // let text = new RainbowText(this.game, 0, center.y/2, "- phaser -\nwith a sprinkle of\nES6 dust!");
  }


  update() {
    this.cookieCounter.update();
    this.prodCounter.update();
  }
}
