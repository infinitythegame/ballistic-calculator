'use strict';

import Mod from './src/Mod.js';
import Band from './src/Range/Band.js';
import Range from './src/Range.js';
import Weapon from './src/Weapon.js';
import Mode from './src/Weapon/Mode.js';

let bandShort = Band.fromValues(0, 8, 6);
let bandMed = new Band(8, 16, new Mod(0));
let bandLong = new Band(16, 24, new Mod(-3));

let range = new Range(bandShort, bandMed, bandLong);

let mode = new Mode('N', range, 2, 13);

let weapon = new Weapon('Light shotgun', mode);

alert(weapon);
