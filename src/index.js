import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './index.css';

import Home from './components/HomeContainer';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import initializeIcons from './initializeIcons';

initializeIcons();
ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));
registerServiceWorker();