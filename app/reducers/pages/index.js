import { combineReducers } from 'redux';

import people from './people';
import planetsIndex from './planets-index';
import planetProfile from './planet-profile';



export default combineReducers({
  people,
  planetsIndex,
  planetProfile
});
