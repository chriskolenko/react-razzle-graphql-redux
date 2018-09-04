import { combineReducers } from 'redux';
import layout from './ducks/layout';
import user from './ducks/user';

const version = (state = '', action) => state;

const rootReducer = combineReducers({
  version,
  layout,
  user,
});

export default rootReducer;
