import * as peopleAx from '../actions/people';

export function index(done, location, {store}, preRouted) {
  if (preRouted) return done();

  store.dispatch(peopleAx.loadPageIndex())
    .then(() => done({page: 'people'}))
    .catch(error => done({error}));
};
