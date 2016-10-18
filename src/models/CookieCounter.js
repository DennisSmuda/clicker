

export default class CookieCounter {

  constructor(game, gamestate) {
    this.game      = game;
    this.gamestate = gamestate;


    this.cookieCounter = this.game.add.text(368, 16, `${this.gamestate.cookies}`, {
      font: '26px Lobster',
      fill: '#FFFFFF',
      align: 'right'
    });

    this.cookieCounter.anchor.setTo(1, 0);

  }



  update() {
    this.cookieCounter.setText(`Cookies\n ${this.gamestate.cookies}`);
  }
}
