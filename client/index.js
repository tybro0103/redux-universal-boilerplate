import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';

import routes from '../app/routes';



let {pathname, search, hash} = window.location;
let location = `${pathname}${search}${hash}`;
let appMainEl = document.getElementById('app-main');

match({routes, location}, (error, redirect, renderProps) => {
  // TODO: handle error and redirect
  var component = <Router {...renderProps} history={browserHistory} />;
  render(component, appMainEl);
});
