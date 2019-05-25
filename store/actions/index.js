import server from '../../apis/server';
import { FETCH_WORDS, GET_WORD, REMOVE_WORD, REMOVE_ALL_WORDS } from '../types';

export const fetchWords = () => async dispatch => {
  console.log('działam');
  try {
    const { data } = await server.get('/api/words');
    dispatch({
      type: FETCH_WORDS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getWord = word => ({
  type: GET_WORD,
  payload: word,
});

export const removeWord = id => ({
  type: REMOVE_WORD,
  payload: id,
});

export const removeAllWords = () => ({
  type: REMOVE_ALL_WORDS,
});
