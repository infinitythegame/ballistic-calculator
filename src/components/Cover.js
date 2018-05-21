import React, { Component } from 'react';

export default class Cover extends Component {
  render() {
    return (
      <fieldset>
        <legend>Target Cover</legend>
        <div id="cover">
          <div id="in-cover">
            <label htmlFor="in-cover">In cover</label>
            <input type="radio" name="cover" value="yes" checked />
          </div>
          <div>
          <label htmlFor="exposed">Out of cover</label>
          <input type="radio" name="cover" id="exposed" value="no" />
          </div>
        </div>
      </fieldset>
    );
  }
}
