
let initialState = {
  personIds: []
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PEOPLE_INDEX_FULFILLED':
      return {
        ...state,
        personIds: action.payload.map(person => person.id)
      };

    default:
      return state;

  };
};
