import { Router } from 'pouter';
import _ from 'lodash';
// import { Router } from '../../pouter/src/';

import * as main from './route-handlers/main';
import * as people from './route-handlers/people';
import * as planets from './route-handlers/planets';

import routes from './routes'

const buildRoutes = (router, routes) => {

  if(typeof routes.path === 'undefined') {
    throw "No path defined";
  }

  if(typeof routes.handler !== 'function') {
    throw "No path defined";
  }

  router.use(routes.path, routes.handler);

  if(typeof routes.childRoutes === 'object'){
    _.each(routes.childRoutes, function(value, key){
      router = buildRoutes(router, value);
    });
  }

  return router;

}

export default function buildRouter(store) {

  let router = new Router();
  router.setContext({store});

  router = buildRoutes(router, routes);

  return router;

};
