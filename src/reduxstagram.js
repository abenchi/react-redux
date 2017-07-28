import React from 'react';
import { render } from 'react-dom';
import {Switch} from 'react-router-dom';
import {BrowserRouter, Link, Route } from 'react-router-dom';

import css from './styles/style.styl';

import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import {Provider} from 'react-redux';
import store, {history} from './store'


class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* Tell the Router to use our enhanced history */}
        <BrowserRouter history={history}>
          <div>
            <Route path="/" component={Main}/>
            <Route exact path="/" component={PhotoGrid}/>
            <Route path="/view/:pathId" component={Single}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<Router/>, document.getElementById('root'))