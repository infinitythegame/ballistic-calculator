import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GhulamFO, Intruder} from './data/units';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator shooter={GhulamFO} target={Intruder} />, document.getElementById('root'));
registerServiceWorker();
