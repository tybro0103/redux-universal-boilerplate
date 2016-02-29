import createHistory from 'history/lib/createBrowserHistory';

let history = null;
if (__IS_CLIENT__) history = createHistory();

export default history;
