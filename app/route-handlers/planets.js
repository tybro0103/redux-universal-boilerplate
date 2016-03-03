import * as planetsAx from '../actions/planets';



export function index(done, location, {store}, preRouted) {
  const fetchPromise = preRouted
    ? Promise.resolve()
    : store.dispatch(planetsAx.loadPageIndex()).payload.promise;
  
  fetchPromise
    .then(() => done({page: 'planets-index'}))
    .catch(error => done({error}));
};



export function profile(done, {params: {planetId}}, {store}, preRouted) {
  const fetchPromise = preRouted
    ? Promise.resolve()
    : store.dispatch(planetsAx.loadPageShow(planetId)).payload.promise;

  fetchPromise
    .then(() => done({page: 'planet-profile'}))
    .catch(error => done({error}));
};
