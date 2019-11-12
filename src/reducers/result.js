import { SET_RESULT } from '../actions/types';

const initialState = {
  result: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
}
