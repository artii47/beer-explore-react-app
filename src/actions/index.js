import {
  FETCH_PAGE,
  FETCH_BEERS,
  FETCH_BEER,
  RESET_BEER,
  RESET_SEARCH,
  SEARCH
} from "./types";
import beers from "../apis/beers";
import _ from "lodash";

export const fetchBeers = changeLoading => async dispatch => {
  const response = await beers.get("/beers");
  dispatch({ type: FETCH_BEERS, payload: response.data });
};

export const fetchSearchBeers = searchTerm => async (dispatch, getState) => {
  const response = await beers.get(`/beers?beer_name=${searchTerm}`);
  const searchTermFromState = getState().searchTerm;
  const filteredBeers = response.data.filter(beer => {
    return beer.name.toLowerCase().includes(searchTermFromState);
  });
  dispatch({ type: FETCH_BEERS, payload: filteredBeers });
};

export const fetchBeer = beerId => async dispatch => {
  const response = await beers.get(`/beers/${beerId}`);

  dispatch({ type: FETCH_BEER, payload: response.data });
};

//fetch another page
//https://api.punkapi.com/v2/beers?page=2&per_page=25

export const fetchPage = (page, changeLoading) => async dispatch => {
  changeLoading();
  const response = await beers.get(`/beers?page=${page}`);
  dispatch({ type: FETCH_PAGE, payload: response.data });
  changeLoading();
};

export const fetchSuggestedBeers = () => async (dispatch, getState) => {
  const response = await beers.get("/beers");
  let fetchedBeer = getState().beer;
  let suggestedBeers = response.data.filter(beer => {
    return (
      beer.abv <= fetchedBeer.abv + 4 &&
      beer.abv >= fetchedBeer.abv - 4 &&
      beer.name !== fetchedBeer.name
    );
  });
  dispatch({
    type: "FETCH_SUGGESTED",
    payload: _.shuffle(suggestedBeers)
  });
};

export const resetBeer = () => {
  return {
    type: RESET_BEER
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  };
};

export const updateSearch = value => {
  return {
    type: SEARCH,
    payload: value.toLowerCase()
  };
};
