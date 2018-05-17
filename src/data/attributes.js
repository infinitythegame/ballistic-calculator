

import Attribute from './../app/Profile/Attribute';

export const mov = new Attribute('Movement', 'MOV');
export const cc = new Attribute('Close Combat', 'CC');
export const bs = new Attribute('Ballistic Skill', 'BS');
export const ph = new Attribute('Physique', 'PH');
export const wip = new Attribute('Willpower', 'WIP');
export const arm =  new Attribute('Armour', 'ARM');
export const bts = new Attribute('Biotechnological Shield', 'BTS');
export const w = new Attribute('Wounds', 'W');
export const str = new Attribute('Structure', 'STR');
export const s = new Attribute('Silhouette', 'S');

export const attributes = new Set([
  mov,
  cc,
  bs,
  ph,
  wip,
  arm,
  bts,
  w,
  s
]);

export const attributesMech = new Set([
  mov,
  cc,
  bs,
  ph,
  wip,
  arm,
  bts,
  str,
  s
]);
