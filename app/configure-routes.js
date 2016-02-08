import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import * as planetsAx from './actions/planets';
import * as peopleAx from './actions/people';
import App from './components/app';
import PageHome from './components/pages/home';
import PagePeople from './components/pages/people';
import PagePlanetsIndex from './components/pages/planets-index';
import PagePlanetProfile from './components/pages/planet-profile';



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

  let onPlanetsIndexEnter = (nextState, replaceState, done) => {
    if (isPageLoaded('planetsIndex')) return done();
    dispatchAndCallback(planetsAx.loadPageIndex, done);
  };

  let onPlanetProfileEnter = (nextState, replaceState, done) => {
    // TODO handle 404s
    let planetId = nextState.params.id;
    dispatchAndCallback(planetsAx.loadPageShow.bind(null, planetId), done);
  };

  let onPeopleEnter = (nextState, replaceState, done) => {
    dispatchAndCallback(peopleAx.loadPageIndex, done);
  };



  /*
   *  ROUTES
   */

  return (
    <Route path="/" component={App}>
      <IndexRoute component={PageHome}/>
      <Route path="/people" component={PagePeople} onEnter={onPeopleEnter} />
      <Route path="/planets" component={PagePlanetsIndex} onEnter={onPlanetsIndexEnter} />
      <Route path="/planets/:id" component={PagePlanetProfile} onEnter={onPlanetProfileEnter} />
    </Route>
  );

};
