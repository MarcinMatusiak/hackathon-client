import { FETCH_WORDS } from '../types';

const wordsReducer = (state = [], action) => {
  if (action.type === FETCH_WORDS) {
    return action.payload;
  }
  return state;
};

export default wordsReducer;
