import React, { Component } from 'react';

export default class Rangefinder extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.currentRange}</td>
        <td>Range</td>
        <td colspan="4"></td>
      </tr>
    );
  }
}
