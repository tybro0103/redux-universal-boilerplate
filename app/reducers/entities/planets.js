import { arrayToIdObjectPairs } from '../utils';



export default function(state={}, action) {
  switch (action.type) {

    case 'PLANETS_LOAD_FULFILLED':
      return {
        ...state,
        ...arrayToIdObjectPairs(action.payload)
      };

    default:
      return state;

  }
};
