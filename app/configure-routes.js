import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import { loadPlanets } from './actions/planets';
import App from './components/app';
import Home from './components/home';
import People from './components/people/';
import Planets from './components/planets/';

export default (store) => {

  let onPlanetsEnter = (nextState, replaceState, done) => {
    console.log('---------------------- onPlanetsEnter');

    if (__IS_CLIENT__) return done();

    let action = store.dispatch(loadPlanets());
    action.payload.promise.then(() => done());
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/people" component={People} />
      <Route path="/planets" component={Planets} onEnter={onPlanetsEnter} />
    </Route>
  );

};
