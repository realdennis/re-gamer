import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import smoothscroll from 'smoothscroll-polyfill';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import {
  faFire,
  faSearch,
  faClock,
  faInfoCircle,
  faChevronLeft,
  faStar
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faHotjar,
  faFire,
  faSearch,
  faClock,
  faInfoCircle,
  faChevronLeft,
  faStar
);

smoothscroll.polyfill();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
