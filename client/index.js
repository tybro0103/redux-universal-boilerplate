import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './globals';
import configureStore from '../app/configure-store';
import buildRouter from '../app/router';
import history from '../app/history';
import apiClient from '../app/api-client';
import * as routingAx from '../app/actions/routing';
import App from '../app/components/app';

const store = configureStore();
const router = buildRouter(store);



// start listening for route changes
router.startRouting(history, (location, data, redirect, error) => {
  if (error) return console.error(error);
  if (redirect) return history.replace(redirect);
  if (data) return store.dispatch(routingAx.enterRoute(location, data.page));
  // not found
  console.error('ROUTE NOT FOUND');
  store.dispatch(routingAx.enterRoute(location));
});



// client takes over by doing initial render
const appRootEl = document.getElementById('app-root');
const component = <Provider store={store}><App /></Provider>;
render(component, appRootEl);



// TODO: only allow this in dev
window.DEV = {
  apiClient,
  store,
  history,
  router
};
