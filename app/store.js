import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

let logger = createLogger({logger: console, collapsed: () => true});

let initialState = {};

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    promiseMiddleware(),
    logger
  )
);

export default store;
