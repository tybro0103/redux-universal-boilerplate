import { combineReducers } from 'redux';

import planetsIndex from './planetsIndex';
import planetsShow from './planetsShow';



export default combineReducers({
  planetsIndex,
  planetsShow
});
