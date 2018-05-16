'use strict';

 import * as attr from '/js/data/attributes.js';
 import * as mods from '/js/data/mods.js';
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

import {GhulamFO, Intruder} from '/js/data/units.js';

for (let stat of GhulamFO.profile) {
  console.log(stat.toString());
}

for (let mode of GhulamFO.weaponModesInRange(7)) {
  console.log(mode.mod.toString());
}
//
// let modStack = ModStack.fromMods(
//   modesInRange[0].mod,
//   mods.cover,
//   mods.mimetism
// );
//
// console.log(modStack.stat(GhulamFO.profile.statFor(attr.bs)));

 //let modesInRange = flashPulse.modesInRange(8);
//
// console.log(modesInRange[0].mode.range.toString());
//
// let modStack = ModStack.fromMods(
//   modesInRange[0].mod,
//   //cover,
//   // mods.targeted,
//   mods.marksmanshipLvlX
// );

// // WIP: 23
// console.log(modStack.stat(Ghulam.statFor(attr.wip)));
//
// modesInRange = boardingShotgun.modesInRange(6);
//
// modStack = ModStack.fromMods(
//   modesInRange[0].mod, // +6
//   //cover,
//   mods.targeted,    // +3
//   mods.marksmanshipLvlX, // +6
//   mods.fireteamFiveMember // +3
// );
//
// // BS: 25 (mods can't be over 12)
// console.log(modStack.stat(Sekban.statFor(attr.bs)));
