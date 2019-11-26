import { FETCH_SUGGESTED_BEERS, RESET_SUGGESTED_BEERS } from "../actions/types";
const INITIAL_STATE = [];
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SUGGESTED_BEERS:
      return { ...action.payload };
    case RESET_SUGGESTED_BEERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
