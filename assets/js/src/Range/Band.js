'use strict';

const start = Symbol('start');
const end = Symbol('end');
const mod = Symbol('mod');

import Mod from './../Mod.js';

export default class Band {
  static fromValues(start, end, mod) {
    if (!mod instanceof Mod) {
      mod = new Mod('Range', mod);
    }
    return new Band(start, end, mod);
  }

  constructor(_start, _end, _mod) {
    if (_start >= _end) {
      throw new BandException('Band end must be greater than band start');
    }

    this[start] = _start;
    this[end] = _end;
    this[mod] = _mod;
  }

  get start() {
    return this[start];
  }

  get end() {
    return this[end];
  }

  get mod() {
    return this[mod];
  }

  in(range) {
    return range >= this.start && range < this.end;
  }

  toString() {
    return this.start + '-' + this.end;
  }
}

class BandException {
  constructor(message) {
    this.message = message;
  }
}
