import { SET_RESULT } from './types';
import { ROCK, PAPER, SCISSORS, P1WIN, P2WIN, DRAW } from '../constants';

// The main logic of the game
export const setResult = (p1Move, p2Move) => async dispatch => {
  let result;
  if (p1Move === ROCK) {
    if (p2Move === PAPER) {
      result = P2WIN;
    } else if (p2Move === SCISSORS) {
      result = P1WIN;
    } else if (p2Move === ROCK) {
      result = DRAW;
    }
  } else if (p1Move === PAPER) {
    if (p2Move === PAPER) {
      result = DRAW;
    } else if (p2Move === SCISSORS) {
      result = P2WIN;
    } else if (p2Move === ROCK) {
      result = P1WIN;
    }
  } else if (p1Move === SCISSORS) {
    if (p2Move === PAPER) {
      result = P1WIN;
    } else if (p2Move === SCISSORS) {
      result = DRAW;
    } else if (p2Move === ROCK) {
      result = P2WIN;
    }
  } else {
  }

  dispatch({
    type: SET_RESULT,
    payload: result
  });
};
