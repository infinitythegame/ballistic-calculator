'use strict';

 import * as attr from '/js/attributes.js';
 import * as mods from '/js/mods.js';
 import ModStack from '/js/src/Calculator/ModStack.js';

// import Band from '/js/src/Range/Band.js';
// import Range from '/js/src/Range.js';
// import Ammo from '/js/src/Ammo.js';
// import Weapon from '/js/src/Weapon.js';
// import Mode from '/js/src/Weapon/Mode.js';
//
import Profile from '/js/src/Profile.js';

//
// import Stat from '/js/src/Profile/Stat.js';
// import Statline from '/js/src/Profile/Statline.js';

import {Ghulam, Sekban} from '/js/units.js';
import {flashPulse, boardingShotgun} from '/js/weapons.js';

let profileGhulam = new Profile(Ghulam);
let profileSekban = new Profile(Sekban);

let modesInRange = flashPulse.modesInRange(8);

console.log(modesInRange[0].mode.range.toString());

let modStack = ModStack.fromMods(
  modesInRange[0].mod,
  //cover,
  // mods.targeted,
  mods.marksmanshipLvlX
);

// WIP: 23
console.log(modStack.stat(profileGhulam.statFor(attr.wip)));

modesInRange = boardingShotgun.modesInRange(6);

modStack = ModStack.fromMods(
  modesInRange[0].mod, // +6
  //cover,
  mods.targeted,    // +3
  mods.marksmanshipLvlX, // +6
  mods.fireteamFiveMember // +3
);

// BS: 25 (mods can't be over 12)
console.log(modStack.stat(profileSekban.statFor(attr.bs)));
