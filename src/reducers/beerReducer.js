import { FETCH_BEER, RESET_BEER } from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BEER:
      return { ...action.payload[0] };
    case RESET_BEER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
