import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  playerTwo: Fighter;
  constructor(player: Fighter, playerTwo: Fighter) {
    super(player);
    this.playerTwo = playerTwo;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.player.attack(this.playerTwo);
      if (this.playerTwo.lifePoints > 0) {
        this.playerTwo.attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}