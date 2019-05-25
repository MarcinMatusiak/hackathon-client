import { createSelector } from 'reselect';

const wordsSelector = state => state.words;

const getAdjectiveWords = words => {
  const selectedWords = words.filter(word => word.category === 'adjective');
  return selectedWords;
};

export default createSelector(
  wordsSelector,
  getAdjectiveWords,
);
