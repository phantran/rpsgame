import { SET_RESULT } from './types';
// clear previous resultand chosen rock,paper,scissors
export const setNewGame = () => async dispatch => {
  dispatch({
    type: SET_RESULT,
    payload: null
  });
};
