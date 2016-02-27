import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux'

import './globals';
import { serveClientJs, serveCss } from './dev-middleware';
import apiRouter from './api';
import configureStore from '../app/configure-store';
import buildRouter from '../app/router';
import Html from './components/html';
import AppComp from '../app/components/app';
import ErrorComp from './components/error';



let projectRoot = path.join(__dirname, '../');
let app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(projectRoot, 'public')));
app.use(cookieSession({name: 'redux-universal-boilerplate', secret: 'not-too-secret'}));

// dev assets
if (app.settings.env === 'development') {
  app.get('/app.js', serveClientJs);
  app.get('/app.css', serveCss);
}

// routers
app.use('/api', apiRouter);

// app routes
// TODO: move into separate file
app.get('*', (req, res, next) => {

  const store = configureStore();
  const router = buildRouter(store);

  // delegate to pouter
  router.route(req.url, (location, data, redirect, error) => {
    console.log('===== ROUTE! ', location);

    if (error) return next(error);
    if (redirect) return res.redirect(redirect);
    if (data) {
      const comp = (
        <Html store={store}>
          <Provider store={store}>
            <AppComp />
          </Provider>
        </Html>
      );
      const html = renderToStaticMarkup(comp);
      return res.send(`<!DOCTYPE html>\n${html}`);
    }

    // if there's no data, redirect, or error present, then no route was found
    next();
  });

});

// catch 404 and pass to error handler
app.use((req, res, next) => {
  let error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  let comp = <ErrorComp error={error} />;
  let html = renderToStaticMarkup(comp);
  res.status(error.status || 500).send(`<!DOCTYPE html>\n${html}`);
});

export default app;
