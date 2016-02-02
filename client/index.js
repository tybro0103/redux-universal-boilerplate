import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../app/routes';
import store from '../app/store';



global.__IS_CLIENT__ = true;
global.__IS_SERVER__ = false;

let {pathname, search, hash} = window.location;
let location = `${pathname}${search}${hash}`;
let appMainEl = document.getElementById('app-main');

match({routes, location}, (error, redirect, renderProps) => {
  // TODO: handle error and redirect
  var component = (
    <Provider store={store}>
      <Router {...renderProps} history={browserHistory} />
    </Provider>
  );
  render(component, appMainEl);
});
