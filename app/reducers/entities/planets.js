import { arrayToIdObjectPairs } from '../utils';



export default function(state={}, action) {
  switch (action.type) {

    case 'LOAD_PAGE_PLANETS_INDEX_RESOLVED':
      return {
        ...state,
        ...arrayToIdObjectPairs(action.result)
      };

    case 'LOAD_PAGE_PLANETS_SHOW_RESOLVED':
      return {
        ...state,
        [action.result.id]: action.result
      };

    default:
      return state;

  }
};
