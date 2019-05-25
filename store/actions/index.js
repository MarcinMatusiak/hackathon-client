import server from '../../apis/server';
import { FETCH_WORDS, GET_WORD } from '../types';

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
