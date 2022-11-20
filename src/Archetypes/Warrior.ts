import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.incrementInstances();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static incrementInstances(): void {
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}