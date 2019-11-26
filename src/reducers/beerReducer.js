import { FETCH_BEER, RESET_BEER } from "../actions/types";
const INITIAL_STATE = {
  beer: [],
  isBeerFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BEER:
      return { beer: action.payload[0] };
    case RESET_BEER:
      return INITIAL_STATE;
    case "FETCH_BEER_START":
      return { ...state, isBeerFetching: true };
    case "FETCH_BEER_SUCCESS":
      return { beer: action.payload[0], isBeerFetching: false };
    default:
      return state;
  }
};
