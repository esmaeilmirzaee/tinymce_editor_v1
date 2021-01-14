import { combineReducers } from 'redux';
import { reducer as customerReducer } from 'redux-form';

export default combineReducers({
  form: customerReducer,
});
