import { SET_PLAY_MODE, SET_RESULT } from './types';

export const setPlayMode = mode => async dispatch => {
  // Change mode
  dispatch({
    type: SET_PLAY_MODE,
    payload: mode
  });
  // Clear previous result
  dispatch({
    type: SET_RESULT,
    payload: null
  });
};
