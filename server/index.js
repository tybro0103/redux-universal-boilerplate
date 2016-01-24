import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './components/html';
import ErrorComp from './components/error';
import App from '../app/components/app';

let projectRoot = path.join(__dirname, '../');
let app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(projectRoot, 'public')));
app.use(cookieSession({name: 'redux-universal-boilerplate', secret: 'not-too-secret'}));

// TODO: routes here
app.get('/', (req, res) => {
  let comp = <Html><App /></Html>;
  let html = ReactDOMServer.renderToStaticMarkup(comp);
  res.send(`<!DOCTYPE html>${html}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  let comp = <ErrorComp error={error} />;
  let html = ReactDOMServer.renderToStaticMarkup(comp);
  res.status(error.status || 500).send(`<!DOCTYPE html>${html}`);
});

export default app;
