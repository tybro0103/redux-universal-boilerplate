import { Router } from 'pouter';
// import { Router } from '../../pouter/src/';

import auth from './route-handlers/middlewares/auth';
import * as main from './route-handlers/main';
import * as sessions from './route-handlers/sessions';
import * as people from './route-handlers/people';
import * as planets from './route-handlers/planets';



export default function buildRouter(store, signedIn) {

  const router = new Router();
  router.setContext({store, signedIn});

  router.use('/', main.home);
  router.use('/foo', main.foo);
  router.use('/login', sessions.login);
  router.use('/people', auth(people.index));
  router.use('/planets', planets.index);
  router.use('/planets/:planetId', planets.profile);

  return router;

};
