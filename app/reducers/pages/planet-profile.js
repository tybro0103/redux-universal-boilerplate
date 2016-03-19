
const initialState = {
  planetId: null
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PLANETS_SHOW_RESOLVED':
      return {
        ...state,
        planetId: action.result.id
      };

    default:
      return state;

  }
};
