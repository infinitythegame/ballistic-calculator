import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <table id={this.props.type}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <Attr profile={this.props.trooper.profile} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.trooper.toString()}</td>
            <Stats profile={this.props.trooper.profile} />
          </tr>
        </tbody>
      </table>
    );
  }
}

function Attr(props) {
  const attr = function*() {
    for (let stat of props.profile) {
      console.log(stat);
      yield <th key={stat.attribute.toString()}>{stat.attribute.toString()}</th>
    }
  };

  return Array.from(attr());
}

function Stats(props) {
  const stats = function*() {
    for (let stat of props.profile) {
      console.log(stat);
      yield <td key={stat.toString()}>{stat.value.toString()}</td>
    }
  };

  return Array.from(stats());
}
