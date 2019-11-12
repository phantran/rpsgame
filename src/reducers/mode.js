import { SET_PLAY_MODE } from '../actions/types';
import { PLAYER_VS_COMPUTER } from '../constants';

const initialState = {
  playMode: PLAYER_VS_COMPUTER
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PLAY_MODE:
      return { ...state, playMode: payload };
    default:
      return state;
  }
}
