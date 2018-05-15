'use strict';

import * as attr from '/js/attributes.js';

import Mod from '/js/src/Mod.js';
import Band from '/js/src/Range/Band.js';
import Range from '/js/src/Range.js';
import Ammo from '/js/src/Ammo.js';
import Weapon from '/js/src/Weapon.js';
import Mode from '/js/src/Weapon/Mode.js';

import Profile from '/js/src/Profile.js';

import Stat from '/js/src/Profile/Stat.js';
import Statline from '/js/src/Profile/Statline.js';

import Ghulam from '/js/stats/Ghulam.js';

let profile = new Profile(Ghulam);

console.log(profile.statFor(attr.bs).valueOf());

let bandShort = Band.fromValues(0, 8, 6);
let bandMed = Band.fromValues(8, 16, new Mod('Range', 0));
let bandLong = new Band(16, 24, new Mod('Range', -3));

let bandLongA = new Band(16, 24, new Mod('Range', -3));

let bandMedB = Band.fromValues(8, 16, new Mod('Range', 3));

let rangeA = new Range(bandShort, bandMed, bandLong);
let rangeB = new Range(bandShort, bandMedB, bandLong);

let normalAmmo = new Ammo('Normal', 'N', null);
let apAmmo = new Ammo('Armour Piercing', 'AP', null);

let blastMode = new Mode(normalAmmo, rangeA, 2, 13, 'Impact - small template');
let apMode = new Mode(apAmmo, rangeB, 2, 13);

let modes = {
  'Blast Mode': blastMode,
  'AP Mode': apMode
};

let weapon = new Weapon('Boarding shotgun', blastMode, apMode);

let modesInRange = weapon.modesInRange(15);

modesInRange.forEach((mode) => {
  alert(mode.band.mod);
});
