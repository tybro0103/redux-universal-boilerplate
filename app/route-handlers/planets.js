import * as planetsAx from '../actions/planets';



export function index(done, location, {store}, preRouted) {
  if (preRouted) return done();
  
  store.dispatch(planetsAx.loadPageIndex())
    .then(() => done({page: 'planets-index'}))
    .catch(error => done({error}));
};



export function profile(done, {params: {planetId}}, {store}, preRouted) {
  if (preRouted) return done();

  store.dispatch(planetsAx.loadPageShow(planetId))
    .then(() => done({page: 'planet-profile'}))
    .catch(error => done({error}));
};
