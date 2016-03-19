/*
 *  route handlers can be wrapped in this to handle unauthorized requests
 *  like so: router.use('/people', auth(peopleIndexHandler));
 *  this middleware checks for a 401 error and redirects to /login
 */

// accept the orginal route handler as arg
export default function auth(origHandler) {
  // return a new route handler
  return function newHandler(finalDone, ...args) {
    // build a new "hijacked" done callback that does the dirty work
    function hijackedDone(result={}) {
      const isAuthError = result.error && result.error.status === 401;
      if (isAuthError) result = {redirect: '/login'};
      finalDone(result);
    };
    // pass on to original route handler
    return origHandler(hijackedDone, ...args);
  };
};
