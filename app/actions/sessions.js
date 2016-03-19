import sessionsApi from '../api-wrappers/sessions';

export function login(password) {
  const promise = sessionsApi.login(password);
  promise.catch(() => {alert('Login Failed')});
  return {
    type: 'SESSIONS_LOGIN',
    promise
  }
};

export function logout() {
  return {
    type: 'SESSIONS_LOGOUT',
    promise: sessionsApi.logout()
  }
};

export function storeSessionStatus(signedIn) {
  return {
    type: 'SESSIONS_STORE_SESSION_STATUS',
    signedIn
  }
};
