import VisualTimer from '../util/VisualTimer';


export default class Oven extends Phaser.Sprite {
  constructor(game, gamestate) {
    super(game, 40, 304, 'oven');
    this.xOrigin = 16;
    this.yOrigin = 280;

    this.game = game;
    this.gamestate = gamestate;
    this.formula = formula;

    this.alpha = 0;
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
    this.setupIndicator();

  }

  onClick() {
    if (this.active) {
      // Initialize first startup
      if (this.productionStart == null) { this.productionStart = this.game.time.now; this.indicator.start(); }

      this.gamestate.ovens++;
      this.gamestate.cookies -= this.formula.cost;
      this.gamestate.productionRate += this.formula.productionRate;
      this.formula.cost += 2;
      let newCost = this.formula.cost * (Math.pow(1.07, this.gamestate.ovens));
      this.formula.cost = newCost.toFixed(2);
    }
  }




  update() {
    if (this.gamestate.cookies >= this.formula.cost) {
      this.activate(true);
    } else {
      this.activate(false);
    }

    this.counter.setText(`x ${this.gamestate.ovens}`);
    this.cost.setText(`${this.formula.cost} C`);

    if (this.productionStart) {
      if ((this.game.time.now - this.productionStart) >= this.formula.speed) {
        this.gamestate.cookies += this.gamestate.ovens;
        this.productionStart = this.game.time.now;
      }
    }

  }

  setupText() {
    this.counter = this.game.add.text(this.xOrigin + 150, this.y, `x ${this.gamestate.ovens}`, {
      font: '19px Lobster',
      fill: '#FFFFFF',
      align: 'right'
    });
    this.cost = this.game.add.text(this.xOrigin + 150, this.y - 20, `${this.formula.cost}`, {
      font: '19px Lobster',
      fill: '#d5404b',
      align: 'right'
    });

    this.counter.anchor.setTo(1, 0);
    this.cost.anchor.setTo(1, 0);
    this.cost.alpha = 0.5;
  }

  setupIndicator() {
    this.indicator = new VisualTimer({
      game: this.game,
      x: this.xOrigin,
      y: this.yOrigin+50,
      seconds: 2,
      type: 'up',
      onComplete: function() {
        console.log('Timer Complete');
        this.start();
      }
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

  activate(status) {
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
}


const formula = {
  cost: 10,
  productionRate: 0.5,
  speed: 2000,
}
