import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './containers/App/App';
import NotFound from './containers/App/NotFound';

import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import CryptScreen from './containers/Cryptscreen/Cryptscreen';

import './styles/styles.scss';

//ROUTING
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/cryptscreen" component={CryptScreen}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
