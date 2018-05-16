'use strict';

import Statline from '/js/src/Profile/Statline.js';
import Profile from '/js/src/Profile.js';
import Trooper from '/js/src/Trooper.js';

import {attributes as attr} from '/js/data/attributes.js';
import * as weapons from '/js/data/weapons.js';


export const GhulamFO = new Trooper(
  'Ghulam FO',
  new Profile(Statline.fromValues(
    attr, [4,4], 13, 11, 10, 14, 1, 0, 1, 2
  )),
  weapons.pistol,
  weapons.flashPulse,
  weapons.rifle,
  weapons.lightShotgun
);

export const Intruder = new Profile(Statline.fromValues(
  attr, [4,2], 14, 13, 12, 14, 3, 0, 1, 2
));
