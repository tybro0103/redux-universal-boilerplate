import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import People from './components/people/';
import Planets from './components/planets/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/people" component={People} />
    <Route path="/planets" component={Planets} />
  </Route>
);
