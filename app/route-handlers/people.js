import * as peopleAx from '../actions/people';

export function index(done, location, {store, signedIn}, preRouted) {
  if (preRouted) return done();

  store.dispatch(peopleAx.loadPageIndex(signedIn))
    .then(() => done({page: 'people'}))
    .catch(error => done({error}));
};
