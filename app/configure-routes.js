import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import { loadPagePlanetsIndex } from './actions/planets';
import App from './components/app';
import Home from './components/home';
import People from './components/people/';
import Planets from './components/planets/';

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

  let onPlanetsEnter = (nextState, replaceState, done) => {
    if (isPageLoaded('planetsIndex')) return done();
    dispatchAndCallback(loadPagePlanetsIndex, done);
  };



  /*
   *  ROUTES
   */

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/people" component={People} />
      <Route path="/planets" component={Planets} onEnter={onPlanetsEnter} />
    </Route>
  );

};
