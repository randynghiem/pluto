import { combineReducers } from 'redux';
import todos from './reducer-todos';
import filter from './reducer-visibility-filter';

export default combineReducers({
  todos,
  filter
});