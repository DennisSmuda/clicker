

export default class CookieCounter {

  constructor(game, gamestate) {
    this.game      = game;
    this.gamestate = gamestate;

    this.cookieCounterText = this.game.add.text(this.game.world.centerX, 10, `Cookies: ${this.gamestate.cookies}`, {
      font: '16px Roboto Mono',
      fill: '#FFFFFF',
      align: 'center'
    });

    this.cookieCounterText.anchor.setTo(0.5);

  }



  update() {
    this.cookieCounterText.setText(`Cookies: ${this.gamestate.cookies}`);
  }
}
