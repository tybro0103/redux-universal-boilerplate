const promiseMiddleware = store => next => action => {

  // ignore if not promise action
  if (!action.promise) return next(action);

  // build a redux action object
  function makeAction(promiseStatus, data={}) {
    let newAction = {...action, ...data, type: `${action.type}_${promiseStatus}`};
    delete newAction.promise
    return newAction
  }

  // dispatch
  next(makeAction('PENDING'));
  action.promise
    .then(result => next(makeAction('RESOLVED', {result})))
    .catch(error => next(makeAction('REJECTED', {error})))

  // return original promise so additional chaining can occur
  return action.promise;
  
};

export default promiseMiddleware;
