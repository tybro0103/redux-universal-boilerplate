import { arrayToIdObjectPairs } from '../utils';



export default function(state={}, action) {
  switch (action.type) {

    case 'LOAD_PAGE_PLANETS_INDEX_FULFILLED':
      return {
        ...state,
        ...arrayToIdObjectPairs(action.payload)
      };

    default:
      return state;

  }
};
