import _ from "lodash";

const INITIAL_STATE = {
  beers: {},
  isFetching: false,
  isPageFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BEERS_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_BEERS_SUCCESS":
      return {
        ...state,
        beers: _.mapKeys(action.payload, "id"),
        isFetching: false
      };
    case "FETCH_PAGE_START":
      return {
        ...state,
        isPageFetching: true
      };
    case "FETCH_PAGE_SUCCESS":
      return {
        ...state,
        beers: { ...state.beers, ..._.mapKeys(action.payload, "id") },
        isPageFetching: false
      };
    default:
      return state;
  }
};
