
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
      let {page, location} = action;
      // ensure page key will be there even if value was undefined
      if (!page) page = null;
      //
      return {
        ...state,
        page,
        location
      };

    default:
      return state;

  }
};
