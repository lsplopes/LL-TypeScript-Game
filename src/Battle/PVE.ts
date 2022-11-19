import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  environment: SimpleFighter[];
  constructor(player: Fighter, environment: SimpleFighter[]) {
    super(player);
    this.environment = environment;
  }

  fight(): number {
    this.environment.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}