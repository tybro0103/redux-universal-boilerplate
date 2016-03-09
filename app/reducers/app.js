const initialState = {
  signedIn: false
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'AUTH_LOGIN_FULFILLED':
      return {
        ...state,
        signedIn: true
      };

    case 'AUTH_LOGOUT_FULFILLED':
      return {
        ...state,
        signedIn: false
      };

    case 'AUTH_STORE_SESSION_STATUS':
      return {
        ...state,
        signedIn: action.signedIn
      };

    default:
      return state;

  }
};
