import Race from './Races';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 60;
    Halfling.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementInstances(): void {
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}