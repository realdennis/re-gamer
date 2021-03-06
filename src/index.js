import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
import 'normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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
import { PersistGate } from 'redux-persist/integration/react';

library.add(
  faHotjar,
  faFire,
  faSearch,
  faClock,
  faInfoCircle,
  faChevronLeft,
  faStar
);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
