import Race from './Races';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);  
    this._maxLifePoints = 99;
    Elf.incrementInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementInstances(): void {
    Elf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}