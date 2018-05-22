import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {GhulamFO, Intruder} from './data/units';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';

const DEFAULT_RANGE = 24;

ReactDOM.render(
  <Calculator shooter={GhulamFO} target={Intruder} defaultRange={DEFAULT_RANGE} />,
  document.getElementById('root')
);
registerServiceWorker();
