

export default class CookieCounter {

  constructor(game, gamestate) {
    this.game      = game;
    this.gamestate = gamestate;


    this.cookieCounter = this.game.add.text(this.game.world.centerX, 55, `${this.gamestate.cookies}`, {
      font: '26px Lobster',
      fill: '#FFFFFF',
      align: 'center'
    });

    this.cookieCounterText = this.game.add.text(this.game.world.centerX, 25, `Cookies`, {
      font: '26px Lobster',
      fill: '#FFFFFF',
      align: 'center'
    });
    this.cookieCounterText.anchor.setTo(0.5);
    this.cookieCounter.anchor.setTo(0.5);

  }



  update() {
    this.cookieCounterText.setText(`Cookies`);
    this.cookieCounter.setText(`${this.gamestate.cookies}`);
  }
}
