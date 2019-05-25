import { GET_WORD, REMOVE_WORD } from '../types';

const getWordReducer = (state = [], action) => {
  if (action.type === GET_WORD) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE_WORD) {
    return state.filter(word => word._id !== action.payload);
  }
  return state;
};

export default getWordReducer;
