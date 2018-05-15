'use strict';

const name = Symbol('name');
const profile = Symbol('profile');
const weapons = Symbol('weapons');

export default class Trooper {
  constructor(_name, _profile, ..._weapons) {
    this[name] = _name;
    this[profile] = _profile;
    this[weapons] = new Set(_weapons);
  }

  get name() {
    return this[name];
  }

  get weapons() {
    return this[weapons];
  }

  get profile() {
    return this[profile];
  }

  toString() {
    return this.name;
  }
}
