import React, { Component } from 'react';

import Profile from './Profile';
import Weapons from './Weapons';
import Cover from './Cover';
import Result from './Result';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: true,
      currentRange: this.props.defaultRange,
    };
  }
  render() {
    return (
      <form id="Calculator">
        <Profile type="shooter" trooper={this.props.shooter} />
        <Profile type="target" trooper={this.props.target} />
        <Weapons weapons={this.props.shooter.weapons} currentRange={this.state.currentRange} />
        <Cover cover={this.state.cover} onChange={(e) => this.handleCover(e)}/>
        <Result />
      </form>
    );
  }

  handleCover(changeEvent) {
  const cover = ('yes' === changeEvent.target.value);
  this.setState({
    cover: cover
  });
  }
}
