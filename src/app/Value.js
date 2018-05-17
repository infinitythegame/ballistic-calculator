
const value = Symbol('value');

export default class Value {
  static toVal(value) {
    return (value instanceof Value) ? value : new Value(value);
  };

  constructor(_value) {
    this[value] = _value;
  }

  get value() {
    return this[value];
  }
  
  valueOf() {
    return this.value;
  }

  toString() {
    const val = this.value instanceof Array ? this.value : [this.value];
    return val.join('-');
  }
}
