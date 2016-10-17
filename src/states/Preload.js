
export default class Preload extends Phaser.State {

  constructor() {
    super();
    this.background = null;
    this.preloadBar = null;
    this.ready      = false;
  }

  preload() {
    // this.stage.backgroundColor = '#2C5146';
    // this.load.image('game-background', 'assets/images/game-background.png');
    this.load.image('game-background', './images/background.png');
    this.load.image('cookie', './images/cookie.png');
    this.load.image('cookie-particle', './images/cookie-particle.png');
  }

  create() {

  }

  update() {
    if (this.ready == false) {
      this.ready = true;
      this.state.start('GameState');
    }
  }

}
