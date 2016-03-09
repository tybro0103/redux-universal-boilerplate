import { Router } from 'pouter';
// import { Router } from '../../pouter/src/';

import * as main from './route-handlers/main';
import * as auth from './route-handlers/auth';
import * as people from './route-handlers/people';
import * as planets from './route-handlers/planets';



export default function buildRouter(store) {

  const router = new Router();
  router.setContext({store});

  router.use('/', main.home);
  router.use('/foo', main.foo);
  router.use('/login', auth.login);
  router.use('/people', people.index);
  router.use('/planets', planets.index);
  router.use('/planets/:planetId', planets.profile);

  return router;

};
