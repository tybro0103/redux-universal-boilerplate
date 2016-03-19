
const initialState = {
  planetIds: []
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PLANETS_INDEX_RESOLVED':
      return {
        ...state,
        planetIds: action.result.map(planet => planet.id)
      };

    default:
      return state;

  }
};
