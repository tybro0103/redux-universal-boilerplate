import { Router } from 'pouter';
// import { Router } from '../../pouter/src/';

import * as main from './controllers/main';
import * as people from './controllers/people';
import * as planets from './controllers/planets';



export default function buildRouter(store) {

  const router = new Router();
  router.setContext({store});

  router.use('/', main.home);
  router.use('/foo', main.foo);
  router.use('/people', people.index);
  router.use('/planets', planets.index);
  router.use('/planets/:planetId', planets.profile);

  return router;

};
