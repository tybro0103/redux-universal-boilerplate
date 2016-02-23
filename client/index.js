import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory as history, match } from 'react-router';
import { Provider } from 'react-redux';

import './globals';
import configureRoutes from '../app/configure-routes';
import configureStore from '../app/configure-store';
import apiClient from '../app/api-client';






import buildRouter from '../app/router';

let store = configureStore();
let router = buildRouter(store);

router.startRouting(history, (location, redirect, error) => {
  if (location) return console.log('===== DONE OK', location);
  if (redirect) return console.log('===== DONE REDIRECT', redirect);
  if (error) return console.log('===== DONE ERROR', error);
  console.log('===== DONE NOT FOUND');
});






// let store = configureStore();
let routes = configureRoutes(store);
let appRootEl = document.getElementById('app-root');

match({routes, history}, (error, redirect, renderProps) => {
  // TODO: handle error and redirect?
  let component = (
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>
  );
  render(component, appRootEl);
});

// TODO: only allow this in dev
window.DEV = {
  apiClient,
  store,
  routes,
  history,
  router
};
