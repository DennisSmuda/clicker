
export default class Oven extends Phaser.Sprite {
  constructor(game, gamestate) {
    super(game, 40, 304, 'oven');
    this.xOrigin = 16;
    this.yOrigin = 280;

    this.game = game;
    this.gamestate = gamestate;
    this.formula = formula;

    this.alpha = 0.5;
    this.active = false;
    this.productionReady = false;

    this.productionStart = null;
    this.productionDuration = 1;

    this.enableBody = true;
    this.anchor.setTo(0.5);
    this.game.stage.addChild(this);

    this.graphics = this.game.add.graphics(0,0);
    this.graphics.beginFill(0xFFFFFF);
    this.graphics.alpha = 0.5;
    this.graphics.drawRoundedRect(this.xOrigin, this.yOrigin, 160, 50, 5);


    // Events
    this.inputEnabled = true;
    this.events.onInputDown.add((pointer) => { this.onClick(pointer); })
    this.events.onInputOver.add(() => { this.onOver(); })
    this.events.onInputOut.add(() => { this.onOut(); })


    this.setupText();

  }

  onClick() {
    if (this.active) {
      if (this.productionStart == null) { this.productionStart = this.game.time.now; }
      this.gamestate.ovens++;
      this.gamestate.cookies -= this.formula.cost;
      this.gamestate.productionRate += this.formula.productionRate;
    }
  }

  update() {
    if (this.gamestate.cookies >= this.formula.cost) {
      this.active = true;
      this.alpha = 1;
    } else {
      this.active = false;
      this.alpha = 0.5;
    }

    this.counter.setText(`x ${this.gamestate.ovens}`);

    if (this.productionStart) {
      if ((this.game.time.now - this.productionStart) >= this.formula.speed) {
        this.gamestate.cookies += this.gamestate.ovens;
        this.productionStart = this.game.time.now;
      }

    }

  }

  setupText() {
    this.counter = this.game.add.text(this.xOrigin + 120, this.y, `x ${this.gamestate.ovens}`, {
      font: '19px Lobster',
      fill: '#FFFFFF',
      align: 'right'
    });

  }

  onOver() {
    if (this.active) {
      this.game.canvas.style.cursor = "pointer";
      this.scale.setTo(1.1);
    }
  }

  onOut() {
    if (this.active) {
      this.game.canvas.style.cursor = "initial";
      this.scale.setTo(1.0);
    }
  }

}


const formula = {
  cost: 10,
  productionRate: 0.5,
  speed: 2000,
}
