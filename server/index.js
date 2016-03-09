import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieSession from 'cookie-session';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import './globals';
import { serveClientJs, serveCss } from './dev-middleware';
import apiRouter from './api/';
import appRouter from './app-router';
import ErrorComp from './components/error';



const projectRoot = path.join(__dirname, '../');
const app = express();

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
app.get('*', appRouter);

// catch 404 and pass to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  const comp = <ErrorComp error={error} />;
  const html = renderToStaticMarkup(comp);
  res.status(error.status || 500).send(`<!DOCTYPE html>\n${html}`);
});

export default app;
