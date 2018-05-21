import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div id={this.props.type} className="trooper">
        <div className="name">{this.props.trooper.toString()}</div>
        <div className="profile">
          <div className="attributes">
            <Attr profile={this.props.trooper.profile} />
          </div>
          <div className="stats">
            <Stats profile={this.props.trooper.profile} />
          </div>
        </div>
      </div>
    );
  }
}

function Attr(props) {
  const attr = function*() {
    for (let stat of props.profile) {
      yield <div className="attribute" key={stat.attribute.toString()}>{stat.attribute.toString()}</div>
    }
  };

  return Array.from(attr());
}

function Stats(props) {
  const stats = function*() {
    for (let stat of props.profile) {
      yield <div key={stat.toString()}>{stat.value.toString()}</div>
    }
  };

  return Array.from(stats());
}
