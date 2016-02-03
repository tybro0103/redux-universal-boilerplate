
let initialState = {
  index: []
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'PLANETS_LOAD_FULFILLED':
      return {
        ...state,
        index: action.payload.map(planet => planet.id)
      };

    default:
      return state;

  }
};
