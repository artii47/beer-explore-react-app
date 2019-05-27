import _ from "lodash";
import { FETCH_PAGE, FETCH_BEERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ..._.mapKeys(action.payload, "id") };
    case FETCH_PAGE:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
