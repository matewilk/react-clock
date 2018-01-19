import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { clock } from './reducers';

export const reducers = combineReducers({
  clock,
  router: routerReducer
});