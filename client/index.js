import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import './globals';
import configureStore from '../app/configure-store';
import buildRouter from '../app/router';
import apiClient from '../app/api-client';
import AppComp from '../app/components/app';



const store = configureStore();
const router = buildRouter(store);
const history = createHistory();



// start listening for route changes
router.startRouting(history, (location, data, redirect, error) => {
  console.log('===== ROUTE! ', location);

  if (error) {
    // TODO: handle errors
    console.log('===== DONE ERROR', error);
  }

  else if (redirect) {
    // TODO: handle redirects
    console.log('===== DONE REDIRECT', redirect);
  }

  else if (data) {
    console.log('===== SUCCESS', data);
  }
  
  else {
    console.log('===== DONE NOT FOUND');
  }

});



// client takes over by re-rendering
const appRootEl = document.getElementById('app-root');
const component = <Provider store={store}><AppComp /></Provider>;
render(component, appRootEl);



// TODO: only allow this in dev
window.DEV = {
  apiClient,
  store,
  history,
  router
};
