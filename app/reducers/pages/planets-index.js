
let initialState = {
  list: [],
  isLoaded: false
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PLANETS_INDEX_FULFILLED':
      return {
        ...state,
        list: action.payload.map(planet => planet.id),
        isLoaded: true
      };

    default:
      return state;

  }
};
