import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [promiseMiddleware()];

// TODO: only do this in dev
if (__IS_CLIENT__) {
  const logger = createLogger({logger: console, collapsed: () => true});
  middleware.push(logger);
}

export default function(initialState={}) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));  
};
