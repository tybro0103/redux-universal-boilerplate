import { arrayToIdObjectPairs } from '../utils';

const initialState = {};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PEOPLE_INDEX_RESOLVED':
      return {
        ...state,
        ...arrayToIdObjectPairs(action.result)
      };

    default:
      return state;

  };
};
