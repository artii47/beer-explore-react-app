export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUGGESTED":
      return { ...action.payload };
    default:
      return state;
  }
};
