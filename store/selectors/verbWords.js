import { createSelector } from 'reselect';

const wordsSelector = state => state.words;

const getVerbWords = words => {
  const selectedWords = words.filter(word => word.category === 'verb');
  return selectedWords;
};

export default createSelector(
  wordsSelector,
  getVerbWords,
);
