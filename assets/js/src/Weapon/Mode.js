'use strict';

const ammo = Symbol('ammo');
const range = Symbol('range');
const burst = Symbol('burst');
const damage = Symbol('damage');
const special = Symbol('special');

import ModeBand from './ModeBand.js';

export default class Mode {
  constructor(_ammo, _range, _burst, _damage, _special = null) {
    this[ammo] = _ammo;
    this[range] = _range;
    this[burst] = _burst;
    this[damage] = _damage;
    this[special] = _special;
  }

  *[Symbol.iterator]() {
    yield* this.range.bands;
  }

  get ammo() {
    return this[ammo];
  }

  get range() {
    return this[range];
  }

  get burst() {
    return this[burst];
  }

  get damage() {
    return this[damage];
  }

  get special() {
    return this[special];
  }

  inRange(distance) {
    let band = this.range.in(distance);
    if (band) {
      return new ModeBand(this, band);
    }
  }
}
