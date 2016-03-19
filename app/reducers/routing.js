
const initialState = {
  location: {
    url: '/',
    path: '/',
    queryString: '',
    query: {},
    params: {}
  },
  page: 'home'
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'ROUTING_ENTER_ROUTE':
      const {page, location} = action;
      return {
        ...state,
        page: (page || state.page),
        location
      };

    default:
      return state;

  }
};
