'use strict';

import Weapon from '/js/src/Weapon.js';
import Mode from '/js/src/Weapon/Mode.js';
import Range from '/js/src/Range.js';

import {stun, normal, ap} from '/js/data/ammo.js';

export const pistol = new Weapon(
  'Pistol',
  new Mode(
    normal,
    Range.fromValues([8, 3], [16, 0], [24, -6]),
    2,
    11
  )
);

export const flashPulse = new Weapon(
  'Flash Pulse',
  new Mode(
    stun,
    Range.fromValues([8, 0], [24, 3], [48, -3], [96, -6]),
    1,
    13
  )
);

export const lightShotgun = new Weapon(
  'Light Shotgun',
  new Mode(
    normal,
    Range.fromValues([8, 6], [16, 0], [24, -3]),
    2,
    13,
    'Impact Template - small teardrop'
  )
);

export const boardingShotgun = new Weapon(
  'Boarding Shotgun',
  new Mode(
    normal,
    Range.fromValues([8, 6], [16, 0], [24, -3]),
    2,
    14,
    'Impact Template - small teardrop'
  ),
  new Mode(
    ap,
    Range.fromValues([8, 6], [16, 0], [24, -3]),
    2,
    14
  ),
);

export const rifle = new Weapon(
  'Combi rifle',
  new Mode(
    normal,
    Range.fromValues([8, 0], [16, 3], [32, -3], [48, -6]),
    3,
    13
  )
);

export const combiRifle = new Weapon(
  'Combi rifle',
  new Mode(
    normal,
    Range.fromValues([8, 3], [16, 3], [32, -3], [48, -6]),
    3,
    13
  )
);
