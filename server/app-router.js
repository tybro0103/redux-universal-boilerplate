import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux'

import buildStore from '../app/store';
import buildRouter from '../app/router';
import Html from './components/html';
import App from '../app/components/app';
import * as routingAx from '../app/actions/routing';



// express middleware that delegates to pouter
export default function(req, res, next) {
  const store = buildStore();
  const router = buildRouter(store);

  // delegate to pouter
  router.route(req.url, (location, data, redirect, error) => {

    // 500 oops
    if (error) return next(error);

    // 302 redirect
    if (redirect) return res.redirect(redirect);
    
    // 200 ok!
    if (data) {
      // put new location & page in store
      store.dispatch(routingAx.enterRoute(location, data.page));
      // turn component tree into html and send it down
      const comp = buildComp(store);
      const html = renderToStaticMarkup(comp);
      return res.send(`<!DOCTYPE html>\n${html}`);
    }

    // 404 not found
    next();

  });
};



function buildComp(store) {
  const serverState = store.getState();
  
  return (
    <Html serverState={serverState}>
      <Provider store={store}>
        <App />
      </Provider>
    </Html>
  );
};
