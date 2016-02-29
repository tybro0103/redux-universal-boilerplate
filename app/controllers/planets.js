import * as planetsAx from '../actions/planets';



export function index(done, location, {store}) {
  const axPayload = store.dispatch(planetsAx.loadPageIndex()).payload;
  axPayload.promise
    .then(() => done.ok({page: 'planets-index'}))
    .catch(error => done.error(error));
};



export function profile(done, {params: {planetId}}, {store}) {
  const axPayload = store.dispatch(planetsAx.loadPageShow(planetId)).payload;
  axPayload.promise
    .then(() => done.ok({page: 'planet-profile'}))
    .catch(error => done.error(error));
};
