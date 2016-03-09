
const initialState = {
  planetId: null
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PLANETS_SHOW_FULFILLED':
      return {
        ...state,
        planetId: action.payload.id
      };

    default:
      return state;

  }
};
