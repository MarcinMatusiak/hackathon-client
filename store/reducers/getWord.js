import { GET_WORD } from '../types';

const getWordReducer = (state = [], action) => {
  if (action.type === GET_WORD) {
    return [...state, action.payload];
  }
  return state;
};

export default getWordReducer;
