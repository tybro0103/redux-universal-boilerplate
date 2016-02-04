import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import './globals';
import routes from '../app/routes';
import store from '../app/store';



let {pathname, search, hash} = window.location;
let location = `${pathname}${search}${hash}`;
let appRootEl = document.getElementById('app-root');

match({routes, location}, (error, redirect, renderProps) => {
  // TODO: handle error and redirect
  var component = (
    <Provider store={store}>
      <Router {...renderProps} history={browserHistory} />
    </Provider>
  );
  render(component, appRootEl);
});
