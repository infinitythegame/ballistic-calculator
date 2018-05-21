import React, { Component } from 'react';

import Profile from './Profile';
import Weapons from './Weapons';
import Cover from './Cover';
import Result from './Result';

export default class Calculator extends Component {
  render() {
    return (
      <form id="Calculator">
        <Profile type="shooter" trooper={this.props.shooter} />
        <Profile type="target" trooper={this.props.target} />
        <Weapons weapons={this.props.shooter.weapons}/>
        <Cover />
        <Result />
      </form>
    );
  }
}
