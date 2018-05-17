import React, { Component } from 'react';

import Profile from './Profile';

export default class Calculator extends Component {
  render() {
    return (
      <form id="Calculator" className="pure-form pure-form-stacked">
        <fieldset id="profiles">
          <Profile type="shooter" trooper={this.props.shooter} />
          <Profile type="target" trooper={this.props.target} />
        </fieldset>
        <fieldset id="range">
          <legend>Range</legend>
          <div className="pure-g">
            <button className="pure-u-1-5">0-8</button>
            <button className="pure-u-1-5">8-16</button>
            <button className="pure-u-1-5">16-24</button>
            <button className="pure-u-1-5">24-32</button>
            <button className="pure-u-1-5">32-48</button>
          </div>
        </fieldset>
        <fieldset id="weapons">

        </fieldset>
        <fieldset>
          <legend>Cover</legend>
          <div id="mod-cover" className="pure-g">
            <div className="pure-u-1-2">
              <input id="mod-cover" type="radio" name="cover" value="yes" />
              In cover
            </div>
            <div className="pure-u-1-2">
              <input id="mod-cover" type="radio" name="cover" value="no" />
              Out of cover
            </div>
          </div>
        </fieldset>
        <fieldset id="mod-fireteam">
          <legend>Fireteam</legend>
          <div className="pure-g">
            <div id="no-fireteam" className="pure-u-1-4">
              <input id="mod-fireteam" type="radio" name="fireteam" value="0" />
              None
            </div>
            <div id="fireteam-3" className="pure-u-1-4">
              <input id="mod-fireteam" type="radio" name="fireteam" value="3" />
              3
            </div>
            <div id="no-fireteam" className="pure-u-1-4">
              <input id="mod-fireteam" type="radio" name="fireteam" value="4" />
              4
            </div>
            <div id="no-fireteam" className="pure-u-1-4">
              <input id="mod-fireteam" type="radio" name="fireteam" value="5" />
              5
            </div>
          </div>
        </fieldset>
        <fieldset id="mod-environment">
          <legend>Environment</legend>
          <div className="pure-g">
            <button id="no-fireteam" className="pure-u-1-4">
              Zero Vis
            </button>
            <button id="fireteam-3" className="pure-u-1-4">
              Limited Vis
            </button>
            <button id="no-fireteam" className="pure-u-1-4">
              Nimbus Zone
            </button>
            <button id="no-fireteam" className="pure-u-1-4">
              Saturation Zone
            </button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Special</legend>
          <div id="mod-fireteam" className="pure-g">
            <div id="no-fireteam" className="pure-u-1-5">
              Targeted
            </div>
            <div id="fireteam-3" className="pure-u-1-5">
              Burnt
            </div>
            <div id="no-fireteam" className="pure-u-1-5">
              Suppressive Fire
            </div>
            <div id="no-fireteam" className="pure-u-1-5">
              Sensor: Triangulated Fire
            </div>
            <div id="supportware-assisted-fire" className="pure-u-1-5">
              Supportware: Asssisted fire
            </div>
          </div>
        </fieldset>
        <div id="result">
        1
        </div>
      </form>
    );
  }
}
