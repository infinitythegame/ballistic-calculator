
import Mode from './Weapon/Mode';

const name = Symbol('name');
const modes = Symbol('modes');

export default class Weapon {
  constructor(_name, ...arrModes) {
    this[name] = _name;

    this[modes] = Array.from(new Set(
      arrModes.filter((mode) => {
        return (mode instanceof Mode);
      }))
    );
  }

  get name() {
    return this[name];
  }

  get modes() {
    return this[modes];
  }

  *[Symbol.iterator]() {
    yield* this.modes;
  }

  modesInRange(distance) {
    let modesInRange = new Set();
    this.modes.forEach((mode) => {
      let modeBand = mode.inRange(distance);
      if (modeBand) {
        modesInRange.add(modeBand);
      }
    });

    return Array.from(modesInRange);
  }

  toString() {
    return this.name;
  }
}
