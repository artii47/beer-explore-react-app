import { SEARCH, RESET_SEARCH } from "../actions/types";
const INITIAL_STATE = "";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    case RESET_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
