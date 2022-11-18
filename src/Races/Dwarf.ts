import Race from './Races';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 80;
    Dwarf.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementInstances(): void {
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}