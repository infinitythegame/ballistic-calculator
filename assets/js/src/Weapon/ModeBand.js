'use strict';

const mode = Symbol('mode');
const band = Symbol('band');

export default class ModeBand {
  constructor(_mode, _band) {
    this[mode] = _mode;
    this[band] = _band;
  }

  get mode() {
    return this[mode];
  }

  get band() {
    return this[band];
  }

  get mod() {
    return this.band.mod;
  }
}
