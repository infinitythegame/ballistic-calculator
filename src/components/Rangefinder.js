import React, { Component } from 'react';

export default class Rangefinder extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.currentRange}</td>
        <td><input type="range" min="0" max="95.9" onChange={this.props.onRangeChange} defaultValue={this.props.currentRange} id="rangeFinder" /></td>
        <td colSpan="4"></td>
      </tr>
    );
  }
}
