import React, { Component } from 'react';

import Rangefinder from './Rangefinder';


const RANGE_GOOD = 'good';
const RANGE_ZERO = 'zero';
const RANGE_BAD = 'bad';
const RANGE_WORST = 'worst';

export default class Profile extends Component {
  render() {
    return (
      <table id="weapons">
        <thead>
          <tr>
            <th id="name">Name</th>
            <th className="rangeBands">
                <div className="range-8">8</div>
                <div className="range-8">16</div>
                <div className="range-8">24</div>
                <div className="range-8">32</div>
                <div className="range-16">48</div>
                <div className="range-48">96</div>
            </th>
            <th id="damage" className="header">Dam.</th>
            <th id="burst" className="header">B</th>
            <th id="ammo" className="header">Ammo</th>
            <th id="notes" className="header">Notes</th>
          </tr>
        </thead>
        <tbody>
          <WeaponsProfiles weapons={this.props.weapons} currentRange={this.props.currentRange} />
        </tbody>
        <tfoot>
          <Rangefinder currentRange={this.props.currentRange} />
        </tfoot>
      </table>
    );
  }
}

function WeaponsProfiles(props) {
  return Array.from(props.weapons).map((weapon) => {
    return (
      <Weapon key={weapon.name} weapon={weapon} currentRange={props.currentRange} />
    );
  });
}

function Weapon(props) {
  return Array.from(props.weapon.modes).map((mode) => {
    return (
      <Mode mode={mode} name={props.weapon.name} currentRange={props.currentRange} />
    )
  });
}

function Mode(props) {
  const outOfRange = OutOfRange(props.mode, props.currentRange);
  return (
    <tr className={outOfRange} key="{props.name}">
      <td className="Weapon-name">{props.name}</td>
      <td className="rangeBands">
        <Range ranges={props.mode.range} />
      </td>
      <td>{props.mode.damage.toString()}</td>
      <td>{props.mode.burst.toString()}</td>
      <td>{props.mode.ammo.code}</td>
      <td></td>
    </tr>
  );
}

function Range(props) {
  return Array.from(props.ranges).map((band) => {
    return Band(band[0], band[1]);
  });
}

function Band(bandName, band) {
  const classes = [];
  classes.push('band');
  classes.push(bandName);
  classes.push('range-' + band.length);
  classes.push(Mod(band.mod.valueOf()));
  return (
    <div key={bandName} className={classes.join(' ')}>{band.mod.toString()}</div>
  );
}

function OutOfRange(mode, distance) {
  return (undefined === mode.inRange(distance)) ? 'outOfRange': '';
}

function Mod(mod) {
  if (mod > 0) {
    return RANGE_GOOD;
  }
  if (0 === mod) {
    return RANGE_ZERO;
  }
  if (-6 === mod) {
    return RANGE_WORST;
  }

  return RANGE_BAD;
}
