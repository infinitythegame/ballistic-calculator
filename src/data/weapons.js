

import Weapon from './../app/Weapon';
import Mode from './../app/Weapon/Mode';
import Range from './../app/Range.js';

import {flash, normal, ap} from './ammo.js';

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
    flash,
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
  'Rifle',
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
