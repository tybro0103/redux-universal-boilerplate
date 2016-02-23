import Router from '../lib/router';

export default function buildRouter(store) {

  const router = new Router();
  router.setContext({store});

  router.use('/', (done, location, context) => {
    console.log('~~~~~~~~~ context', context);
    console.log('~~~~~~~~~ location', location);
    done.ok({page: 'home'});
  });

  router.use('/people', (done, location, context) => {
    console.log('~~~~~~~~~ context', context);
    console.log('~~~~~~~~~ location', location);
    done.redirect('/home');
  });

  router.use('/planets/:planetId', (done, location, context) => {
    console.log('~~~~~~~~~ context', context);
    console.log('~~~~~~~~~ location', location);
    done.error({message: 'whoops'});
  });

  router.use('/planets', (done, location, context) => {
    console.log('~~~~~~~~~ context', context);
    console.log('~~~~~~~~~ location', location);
    done.ok({page: 'planets-index'});
  });

  return router;

};
