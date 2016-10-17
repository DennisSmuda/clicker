

export default class Cookie extends Phaser.Sprite {
  constructor(game, x, y, gamestate) {
    super(game, x, y, 'cookie');
    this.game = game;
    this.gamestate = gamestate;
    this.enableBody = true;
    this.anchor.setTo(0.5);

    this.game.stage.addChild(this);

    this.inputEnabled = true;
    this.events.onInputDown.add(() => { this.onClick(); })
    this.events.onInputOver.add(() => { this.onOver(); })
    this.events.onInputOut.add(() => { this.onOut(); })

  }

  onClick() {
    console.log('Clicked');
    this.gamestate.timesClicked++;
    this.gamestate.cookies++;
    this.scale.setTo(1.05);
  }

  onOver() {
    this.game.canvas.style.cursor = "pointer";
    this.scale.setTo(1.1);
  }

  onOut() {
    this.game.canvas.style.cursor = "initial";
    this.scale.setTo(1.0);
  }

  update() {
    this.angle += 1;
  }
}
