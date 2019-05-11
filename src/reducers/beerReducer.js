const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BEER":
      return { ...state, ...action.payload[0] };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};
