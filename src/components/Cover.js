import React, { Component } from 'react';

export default function Cover (props) {
  return (
    <fieldset>
      <legend>Target Cover</legend>
      <div id="cover">
        <div id="in-cover">
          <label htmlFor="in-cover">In cover</label>
          <input type="radio" name="cover" value="yes" onChange={props.onChange} checked={true === props.cover} />
        </div>
        <div>
        <label htmlFor="exposed">Out of cover</label>
        <input type="radio" name="cover" id="exposed" value="no" onChange={props.onCoverChange} checked={false === props.cover} />
        </div>
      </div>
    </fieldset>
  );
}
