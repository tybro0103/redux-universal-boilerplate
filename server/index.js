import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'

import appRoutes from '../app/routes';
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

// app routes
app.get('*', (req, res, next) => {
  // use react router to match current location against app routes
  match({routes: appRoutes, location: req.url}, (error, redirect, renderProps) => {
    if (error) return next(error);
    if (redirect) return res.redirect(302, `${redirect.pathname}${redirect.search}`);
    if (renderProps) {
      let comp = <Html><RouterContext {...renderProps} /></Html>;
      let html = renderToString(comp);
      return res.send(`<!DOCTYPE html>${html}`);
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
  res.status(error.status || 500).send(`<!DOCTYPE html>${html}`);
});

export default app;
