
let initialState = {
  list: [],
  listLoadedAt: null
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'PLANETS_LOAD_FULFILLED':
      return {
        ...state,
        list: action.payload.map(planet => planet.id),
        listLoadedAt: (new Date()).getTime()
      };

    default:
      return state;

  }
};
