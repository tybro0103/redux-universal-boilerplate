import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import './globals';
import configureRoutes from '../app/configure-routes';
import configureStore from '../app/configure-store';
import apiClient from '../app/api-client';


let store = configureStore();
let routes = configureRoutes(store);
let {pathname, search, hash} = window.location;
let location = `${pathname}${search}${hash}`;
let appRootEl = document.getElementById('app-root');

match({routes, location}, (error, redirect, renderProps) => {
  // TODO: handle error and redirect?
  var component = (
    <Provider store={store}>
      <Router {...renderProps} history={browserHistory} />
    </Provider>
  );
  render(component, appRootEl);
});

// TODO: only allow this in dev
window.App = {
  apiClient,
  store,
  routes
};
