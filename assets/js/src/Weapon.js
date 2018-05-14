'use strict';

const name = Symbol('name');
const modes = Symbol('modes');

import Mode from './Weapon/Mode.js';

export default class Weapon {
  constructor(_name, ...arrModes) {
    this[name] = _name;

    this[modes] = Array.from(new Set(
      arrModes.filter((mode) => {
        return (mode instanceof Mode);
      }))
    );
  }

  get name() {
    return this[name];
  }

  get modes() {
    return this[modes];
  }

  toString() {
    return this.name;
  }
}
