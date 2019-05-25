import server from '../../apis/server';
import { FETCH_WORDS } from '../types';

export const fetchWords = () => async dispatch => {
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
