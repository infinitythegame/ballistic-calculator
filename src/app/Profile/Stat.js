
import Value from './../Value';

const attribute = Symbol('attribute');
const value = Symbol('value');

export default class Stat {
  constructor(_attribute, _value) {
    this[attribute] = _attribute;
    this[value] = _value instanceof Value ? _value : new Value(_value);
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
