import Router from '../lib/router';



const router = new Router();

router.use('/people/:userId', (a) => {
  console.log('---------- ROUTE MATCH -------------');
  console.log('/people/:userId', a);
});

router.use('/people', (a) => {
  console.log('---------- ROUTE MATCH -------------');
  console.log('/people', a);
});

router.use('/planets/:planetId', (a) => {
  console.log('---------- ROUTE MATCH -------------');
  console.log('/planets/:planetId', a);
});

router.use('/planets', (a) => {
  console.log('---------- ROUTE MATCH -------------');
  console.log('/planets', a);
});

router.use('/foo/:nom/bar', (a) => {
  console.log('---------- ROUTE MATCH -------------');
  console.log('/foo/:nom/bar', a);
});

export default router;
