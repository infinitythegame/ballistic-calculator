import React, { Component } from 'react';

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
                <div id="first" className="active">0</div>
                <div className="active">8</div>
                <div>12</div>
                <div className="active">16</div>
                <div>20</div>
                <div className="active">24</div>
                <div>28</div>
                <div className="active">32</div>
                <div>36</div>
                <div>40</div>
                <div>44</div>
                <div className="active">48</div>
                <div>52</div>
                <div>56</div>
                <div>60</div>
                <div>64</div>
                <div>68</div>
                <div>72</div>
                <div>76</div>
                <div>80</div>
                <div>84</div>
                <div>88</div>
                <div>92</div>
                <div className="active">96</div>
            </th>
            <th id="damage" className="header">Dam.</th>
            <th id="burst" className="header">B</th>
            <th id="ammo" className="header">Ammo</th>
            <th id="notes" className="header">Notes</th>
          </tr>
        </thead>
        <tbody>
          <WeaponsProfiles weapons={this.props.weapons} />
        </tbody>
      </table>
    );
  }
}

function WeaponsProfiles(props) {
  return Array.from(props.weapons).map((weapon) => {
    return (
      <Weapon key={weapon.name} weapon={weapon} />
    );
  });
}

function Weapon(props) {
  return Array.from(props.weapon.modes).map((mode) => {
    return (
      <Mode mode={mode} name={props.weapon.name} />
    )
  });
}

function Mode(props) {
  return (
    <tr key="{props.name}">
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
  const classes = new Array();
  classes.push('band');
  classes.push(bandName);
  classes.push('range-' + band.length);
  classes.push(Mod(band.mod.valueOf()));
  return (
    <div key={bandName} className={classes.join(' ')}>{band.mod.toString()}</div>
  );
}

function Mod(mod) {
  console.log(mod);
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
