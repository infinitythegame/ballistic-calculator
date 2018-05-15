'use strict';

const attribute = Symbol('attribute');
const value = Symbol('value');

export default class Stat {
  constructor(_attribute, _value) {
    this[attribute] = _attribute;
    this[value] = _value;
  }

  get attribute() {
    return this[attribute];
  }

  get value() {
    return this[value];
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this.attribute + ': ' + this.value;
  }
}
