import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import words from './reducers/words';

const rootReducer = combineReducers({
  form: formReducer,
  words,
});

export default rootReducer;
