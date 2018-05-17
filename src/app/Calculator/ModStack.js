

import Mod from 'app/Mod.js';

const mods = Symbol('mods');



export const MAX_POSITIVE_MOD = 12;
export const MAX_NEGATIVE_MOD = -12;

export default class ModStack {
  static fromMods(..._mods) {
    return new ModStack(_mods);
  }

  constructor(_mods = []) {
    this[mods] = new Set(_mods);
  }

  get mods() {
    return Array.from(this[mods]);
  }

  get val() {
    return new Mod('Total', clamp(
      this.mods.reduce((sum, mod) => sum + mod),
      MAX_POSITIVE_MOD,
      MAX_NEGATIVE_MOD
    ));
  }

  stat(stat) {
    return stat + this.val;
  }

  valueOf() {
    return this.val;
  }

  *[Symbol.iterator]() {
    yield* this.mods;
  }
}

const clamp = (total, max, min) => {
  return Math.max(min, Math.min(total, max));
};
