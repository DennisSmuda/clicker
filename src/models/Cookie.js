

export default class Cookie extends Phaser.Sprite {
  constructor(game, x, y, gamestate) {
    super(game, x, y, 'cookie');
    this.game = game;
    this.gamestate = gamestate;
    this.enableBody = true;
    this.anchor.setTo(0.5);

    this.game.stage.addChild(this);

    this.inputEnabled = true;
    this.events.onInputDown.add((pointer) => { this.onClick(pointer); })
    this.events.onInputOver.add(() => { this.onOver(); })
    this.events.onInputOut.add(() => { this.onOut(); })

    this.emitter = this.game.add.emitter(0, 0, 10);
    this.emitter.makeParticles('cookie-particle');
    this.emitter.gravity = 0;
    this.emitter.particleBringToTop = true;
    this.emitter.x = x;
    this.emitter.y = y;
    this.emitter.minParticleSpeed.set(500, 0);
    this.emitter.maxParticleSpeed.set(500, 0);

  }

  onClick(pointer) {
    console.log('Clicked');
    this.gamestate.timesClicked++;
    this.gamestate.cookies++;
    this.scale.setTo(1.05);
    this.emitter.setAlpha(0.7, 0, 200);
    this.emitter.start(true, 800, null, 1);
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
    this.angle += 0.4;
  }
}
