'use strict';

const name = Symbol('name');
const code = Symbol('code');
const effects = Symbol('effects');

export default class Ammo {
  constructor(_name, _code, _effects = null) {
    this[name] = _name;
    this[code] = _code;
    this[effects] = _effects;
  }

  get name() {
    return this[name];
  }

  get code() {
    return this[code];
  }

  get effects() {
    return this[effects];
  }

  toString() {
    return this.code;
  }
}
