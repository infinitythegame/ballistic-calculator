

const name = Symbol('name');
const profile = Symbol('profile');
const weapons = Symbol('weapons');

export default class Trooper {
  constructor(_name, _profile, ..._weapons) {
    this[name] = _name;
    this[profile] = _profile;
    this[weapons] = new Set(_weapons);
  }

  get name() {
    return this[name];
  }

  get weapons() {
    return Array.from(this[weapons]);
  }

  get profile() {
    return this[profile];
  }

  *weaponModesInRange(distance) {
    let modes = new Set();
    this.weapons.forEach((weapon) => {
      weapon.modesInRange(distance).forEach((modeBand) => {
        modes.add(modeBand);
      });
    });
    yield* Array.from(modes).sort(compareRangeMods);
  }

  toString() {
    return this.name;
  }
}

const compareRangeMods = (bandA, bandB) =>{
  if (bandA.mod > bandB.mod) {
    return -1;
  }
  if (bandB.mod > bandA.mod) {
    return 1;
  }

  return 0;
}
