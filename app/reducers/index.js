import { combineReducers } from 'redux';

import pages from './pages/';
import entities from './entities/';
import app from './app';
import routing from './routing';



export default combineReducers({
  pages,
  entities,
  app,
  routing
});
