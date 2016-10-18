
export default class ProductionCounter {

  constructor(game, gamestate) {
    this.game      = game;
    this.gamestate = gamestate;


    this.prodRate = this.game.add.text(16, 16, `${this.gamestate.productionRate}`, {
      font: '26px Lobster',
      fill: '#FFFFFF',
      align: 'left'
    });

    this.prodRate.anchor.setTo(0, 0);
  }

  update() {
    this.prodRate.setText(`Rate \n ${this.gamestate.productionRate} c/s`)
  }


}
