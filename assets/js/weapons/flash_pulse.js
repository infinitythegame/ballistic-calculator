'use strict';

import Weapon from '/js/src/Weapon.js';
import Mode from '/js/src/Weapon/Mode.js';
import Range from '/js/src/Range.js';

import {stun as Stun} from '/js/weapons/ammo.js';

const flashPulse = new Weapon(
  'Flash Pulse',
  new Mode(
    Stun,
    Range.fromValues([8, 0], [24, 3], [48, -3], [96, -6]),
    13
  )
);

export default flashPulse;
