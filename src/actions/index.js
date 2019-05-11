import beers from "../apis/beers";

export const fetchBeers = () => async dispatch => {
  const response = await beers.get("/beers");

  dispatch({ type: "FETCH_BEERS", payload: response.data });
};

export const fetchBeer = beerId => async dispatch => {
  const response = await beers.get(`/beers/${beerId}`);

  dispatch({ type: "FETCH_BEER", payload: response.data });
};

export const reset = () => async dispatch => {
  dispatch({ type: "RESET" });
};

export const search = (value) => {
  return{
    type: 'SEARCH',
    payload: value
  }
}
