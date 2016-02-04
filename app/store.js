import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

let logger = createLogger({logger: console, collapsed: () => true});

let initialState = __IS_CLIENT__
  ? window.__data
  : {};

let store = createStore(rootReducer, initialState, compose(
  applyMiddleware(
    promiseMiddleware()
    // logger
  ),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));

export default store;
