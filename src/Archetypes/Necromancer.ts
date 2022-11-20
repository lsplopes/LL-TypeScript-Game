import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.incrementInstances();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static incrementInstances(): void {
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}