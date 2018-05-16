'use strict';

const statline = Symbol('statline');
const inventory = Symbol('inventory');

export default class Profile {
  constructor(_statline, ..._inventory) {
    this[statline] = _statline;
    this[inventory] = _inventory;
  }

  *[Symbol.iterator]() {
    yield* this.statline;
  }

  get statline() {
    return this[statline];
  }

  statFor(attribute) {
    return this.statline.find(attribute);
  }
}
