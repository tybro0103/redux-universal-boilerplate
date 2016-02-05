import { combineReducers } from 'redux';

import planetsIndex from './planets-index';
import planetsShow from './planets-show';
import peopleIndex from './people-index';



export default combineReducers({
  planetsIndex,
  planetsShow,
  peopleIndex
});
