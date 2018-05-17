

const name = Symbol('name');
const code = Symbol('code');

export default class Attribute {
  constructor(_name, _code) {
    this[name] = _name;
    this[code] = _code;
  }

  get name() {
    return this[name];
  }

  get code() {
    return this[code];
  }

  toString() {
    return this.code;
  }
}
