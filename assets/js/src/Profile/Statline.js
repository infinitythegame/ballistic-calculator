'use strict';

import Stat from '/js/src/Profile/Stat.js';

const stats = Symbol('stats');

export default class Statline {
  static fromValues(attributes, ...values) {
    return new Statline(Array.from(attributes.values()).map((attribute, i) => {
      return new Stat(attribute, values[i]);
    }));
  }

  static fromStats(..._stats) {
    return new Statline(_stats);
  }

  constructor(_stats) {
    this[stats] = new Set(_stats);
  }

  *[Symbol.iterator]() {
    yield* this.stats;
  }
  get stats() {
    return Array.from(this[stats]);
  }

  find(attribute) {
    return this.stats.find((stat) => {
      if (stat.attribute === attribute) {
        return stat;
      }
    });
  }
}
