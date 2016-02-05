import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import * as planetsAx from './actions/planets';
import * as peopleAx from './actions/people';
import App from './components/app';
import Home from './components/home';
import People from './components/people/';
import PlanetsIndex from './components/planets/index';
import PlanetsShow from './components/planets/show';



export default (store) => {

  /*
   *  CONVENIENCES
   */

  // checks store for 'isLoaded' for the given page
  let isPageLoaded = (pageName) => {
    let page = store.getState().pages[pageName];
    return page && page.isLoaded;
  };

  // dispatches given (promise-based) action and invokes CB
  let dispatchAndCallback = (action, done) => {
    store.dispatch(action()).payload.promise
      .then(() => done())
      .catch(error => done(error));
  };



  /*
   *  HOOKS
   */

  let onPlanetIndexEnter = (nextState, replaceState, done) => {
    if (isPageLoaded('planetsIndex')) return done();
    dispatchAndCallback(planetsAx.loadPageIndex, done);
  };

  let onPlanetShowEnter = (nextState, replaceState, done) => {
    // TODO handle 404s
    let planetId = nextState.params.id;
    dispatchAndCallback(planetsAx.loadPageShow.bind(null, planetId), done);
  };

  let onPeopleIndexEnter = (nextState, replaceState, done) => {
    dispatchAndCallback(peopleAx.loadPageIndex, done);
  };



  /*
   *  ROUTES
   */

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/people" component={People} onEnter={onPeopleIndexEnter} />
      <Route path="/planets" component={PlanetsIndex} onEnter={onPlanetIndexEnter} />
      <Route path="/planets/:id" component={PlanetsShow} onEnter={onPlanetShowEnter} />
    </Route>
  );

};
