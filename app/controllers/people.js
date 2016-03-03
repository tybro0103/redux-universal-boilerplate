import * as peopleAx from '../actions/people';



export function index(done, location, {store}, preRouted) {
  const fetchPromise = preRouted
    ? Promise.resolve()
    : store.dispatch(peopleAx.loadPageIndex()).payload.promise;

  fetchPromise
    .then(() => done({page: 'people'}))
    .catch(error => done({error}));
};
