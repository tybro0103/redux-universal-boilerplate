import sessionsApi from '../api-wrappers/sessions';
import history from '../history';

export function login(password) {
  const promise = sessionsApi.login(password);
  promise.then(() => history.push('/'));
  promise.catch(() => {alert('Login Failed')});

  return {
    type: 'SESSIONS_LOGIN',
    promise
  }
};

export function logout() {
  const promise = sessionsApi.logout()
  promise.then(() => history.push('/'));

  return {
    type: 'SESSIONS_LOGOUT',
    promise
  }
};

export function storeSessionStatus(signedIn) {
  return {
    type: 'SESSIONS_STORE_SESSION_STATUS',
    signedIn
  }
};
