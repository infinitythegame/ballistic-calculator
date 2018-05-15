'use strict';

const name = Symbol('name');
const mods = Symbol('mods');

export default class Effect {
  constructor(_name, _mods = []) {
    this[name] = _name;
    this[mods] = _mods;
  }

  
}
