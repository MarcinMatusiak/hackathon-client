import { createSelector } from 'reselect';

const wordsSelector = state => state.words;

const getNounWords = words => {
  const selectedWords = words.filter(word => word.category === 'noun');
  return selectedWords;
};

export default createSelector(
  wordsSelector,
  getNounWords,
);
