import React, { Component } from 'react';

import Profile from './Profile';
import Weapons from './Weapons';

export default class Calculator extends Component {
  render() {
    return (
      <div id="Calculator">
        <Profile type="shooter" trooper={this.props.shooter} />
        <Profile type="target" trooper={this.props.target} />
        <Weapons weapons={this.props.shooter.weapons}/>
      </div>
    );
  }
}
