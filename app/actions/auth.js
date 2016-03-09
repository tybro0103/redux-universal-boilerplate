import authApi from '../api-wrappers/auth';

export function login(password) {
  const promise = authApi.login(password);
  promise.catch(() => {alert('Login Failed')});
  return {
    type: 'AUTH_LOGIN',
    payload: {promise}
  }
};

export function logout() {
  return {
    type: 'AUTH_LOGOUT',
    payload: {promise: authApi.logout()}
  }
};

export function storeSessionStatus(signedIn) {
  return {
    type: 'AUTH_STORE_SESSION_STATUS',
    signedIn
  }
};
