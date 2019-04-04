/* eslint-disable import/first */
require('dotenv').config();

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './i18n';

import App from './components/App';
import SplashScreen from './components/SplashScreen';

ReactDOM.render((
  <Suspense fallback={<SplashScreen text="Loading..." />}>
    <App />
  </Suspense>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
