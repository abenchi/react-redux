import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Raven from 'raven-js';

import App from './components/App'

import {Provider} from 'react-redux';
import store from './store/store';

Raven
  .config('https://417e6808223649c9b9a2c78e25e9ed19@sentry.io/196850')
  .install()

Raven.captureMessage('Kader to sentry');
Raven.showReportDialog();

export default class Router extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={App}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}