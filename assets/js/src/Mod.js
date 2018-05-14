'use strict';

const name = Symbol('name');
const val = Symbol('val');

export default class Mod {
  constructor(_name, _val) {
    this[name] = _name;
    this[val] = _val;
  }

  get name() {
    return this[name];
  }

  get val() {
    return this[val];
  }

  valueOf() {
    return this.val;
  }

  toString() {
    const prefix = (this.val > 0) ? '+' : '';
    return prefix + this.val;
  }
}
