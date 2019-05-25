import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import words from './reducers/words';
import getWordReducer from './reducers/getWord';

const rootReducer = combineReducers({
  form: formReducer,
  words,
  getWordReducer,
});

export default rootReducer;
