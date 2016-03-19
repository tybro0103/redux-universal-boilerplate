
const initialState = {
  signedIn: false
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'SESSIONS_LOGIN_RESOLVED':
      return {
        ...state,
        signedIn: true
      };

    case 'SESSIONS_LOGOUT_RESOLVED':
      return {
        ...state,
        signedIn: false
      };

    case 'SESSIONS_STORE_SESSION_STATUS':
      return {
        ...state,
        signedIn: action.signedIn
      };

    default:
      return state;

  }
};
