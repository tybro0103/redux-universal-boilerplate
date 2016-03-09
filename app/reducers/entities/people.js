import { arrayToIdObjectPairs } from '../utils';

const initialState = {};

export default function(state=initialState, action) {
  switch(action.type) {

    case 'LOAD_PAGE_PEOPLE_INDEX_FULFILLED':
      return {
        ...state,
        ...arrayToIdObjectPairs(action.payload)
      };

    default:
      return state;

  };
};
