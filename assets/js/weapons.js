'use strict';

import Weapon from '/js/src/Weapon.js';
import Mode from '/js/src/Weapon/Mode.js';
import Range from '/js/src/Range.js';

import {stun, normal, ap} from '/js/ammo.js';

export const flashPulse = new Weapon(
  'Flash Pulse',
  new Mode(
    stun,
    Range.fromValues([8, 0], [24, 3], [48, -3], [96, -6]),
    13
  )
);

export const boardingShotgun = new Weapon(
  'Boarding Shotgun',
  new Mode(
    normal,
    Range.fromValues([8, 6], [16, 0], [24, -3]),
    14,
    'Impact Template - small teardrop'
  ),
  new Mode(
    ap,
    Range.fromValues([8, 6], [16, 0], [24, -3]),
    14
  ),
);
