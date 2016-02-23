import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'

import './globals';
import { serveClientJs, serveCss } from './dev-middleware';
import apiRouter from './api';
import configureRoutes from '../app/configure-routes';
import configureStore from '../app/configure-store';
import Html from './components/html';
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
import buildRouter from '../app/router';
app.get('*', (req, res, next) => {
  let store = configureStore();
  let router = buildRouter(store);
  router.route(req.url, (location, redirect, error) => {
    if (location) return console.log('===== DONE OK', location);
    if (redirect) return console.log('===== DONE REDIRECT', redirect);
    if (error) return console.log('===== DONE ERROR', error);
    console.log('===== DONE NOT FOUND');
  });


  // let store = configureStore();
  let routes = configureRoutes(store);
  // use react router to match current location against app routes
  match({routes, location: req.url}, (error, redirect, renderProps) => {
    if (error) return next(error);
    if (redirect) return res.redirect(`${redirect.pathname}${redirect.search}`);
    if (renderProps) {
      let comp = (
        <Html store={store}>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </Html>
      );
      let html = renderToStaticMarkup(comp);
      return res.send(`<!DOCTYPE html>\n${html}`);
    }
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
