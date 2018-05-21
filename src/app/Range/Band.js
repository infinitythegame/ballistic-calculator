

import Value from './../Value.js';
import Mod from './../Mod.js';

const start = Symbol('start');
const end = Symbol('end');
const mod = Symbol('mod');

export default class Band {
  static fromValues(_start, _end, _mod) {
    _start = Value.toVal(_start);
    _end = Value.toVal(_end);
    _mod = new Mod('Range', _mod);
    return new Band(_start, _end, _mod);
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

  get length() {
    return this.end - this.start;
  }

  in(range) {
    range = Value.toVal(range);
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
