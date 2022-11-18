import Race from './Races';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 74;
    Orc.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementInstances(): void {
    Orc._instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }
}