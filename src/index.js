
import GameState from './states/GameState';
import Preload from './states/Preload';

class Game extends Phaser.Game {

  constructor() {
    super(384, 497, Phaser.AUTO, 'content', null);
    

    this.state.add('GameState', GameState, false);
    this.state.add('Preload', Preload, false);
    this.state.start('Preload');
  }

}

new Game();
