import * as peopleAx from '../actions/people';



export function index(done, location, {store}) {
  const axPayload = store.dispatch(peopleAx.loadPageIndex()).payload;
  axPayload.promise
    .then(() => done.ok({page: 'people'}))
    .catch(error => done.error(error));
};
