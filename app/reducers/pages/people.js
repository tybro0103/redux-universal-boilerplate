
const initialState = {
  personIds: [],
  selectedPersonId: null
};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PEOPLE_INDEX_RESOLVED':
      return {
        ...state,
        personIds: action.result.map(person => person.id)
      };

    case 'PEOPLE_INDEX_SELECT_PERSON':
      return {
        ...state,
        selectedPersonId: action.personId
      };

    default:
      return state;

  };
};
