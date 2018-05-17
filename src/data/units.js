

import Statline from './../app/Profile/Statline';
import Profile from './../app/Profile';
import Trooper from './../app/Trooper';

import {attributes as attr} from './attributes';
import * as weapons from './weapons';

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

export const Intruder = new Trooper(
  'Intruder (Combi Rifle)',
  new Profile(Statline.fromValues(
  attr, [4,2], 14, 13, 12, 14, 3, 0, 1, 2
)),
  weapons.pistol,
  weapons.combiRifle
);
