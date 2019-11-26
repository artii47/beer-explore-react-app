import {
  FETCH_BEERS,
  RESET_BEER,
  RESET_SEARCH,
  SEARCH,
  RESET_SUGGESTED_BEERS,
  FETCH_BEERS_START,
  FETCH_BEERS_SUCCESS,
  FETCH_SEARCH_BEERS_START,
  FETCH_BEER_START,
  FETCH_BEER_SUCCESS,
  FETCH_PAGE_START,
  FETCH_PAGE_SUCCESS,
  FETCH_SUGGESTED
} from "./types";
import beers from "../apis/beers";
import _ from "lodash";

export const fetchBeersStart = () => {
  return {
    type: FETCH_BEERS_START
  };
};

export const fetchBeersSuccess = response => {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: response
  };
};

export const fetchSearchBeersStart = (searchTerm, store) => {
  return {
    type: FETCH_SEARCH_BEERS_START,
    payload: {
      searchTerm: searchTerm,
      store: store
    }
  };
};

export const fetchSearchBeersSuccess = response => {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: response
  };
};

export const fetchSearchBeers = searchTerm => async (dispatch, getState) => {
  const response = await beers.get(`/beers?beer_name=${searchTerm}`);
  const searchTermFromState = getState().searchTerm;
  const filteredBeers = response.data.filter(beer => {
    return beer.name.toLowerCase().includes(searchTermFromState);
  });
  dispatch({ type: FETCH_BEERS, payload: filteredBeers });
};

export const fetchBeerStart = beerId => {
  return {
    type: FETCH_BEER_START,
    payload: { beerId }
  };
};

export const fetchBeerSuccess = response => {
  return {
    type: FETCH_BEER_SUCCESS,
    payload: response
  };
};

export const fetchPageStart = page => {
  return {
    type: FETCH_PAGE_START,
    payload: {
      page: page
    }
  };
};

export const fetchPageSuccess = response => {
  return {
    type: FETCH_PAGE_SUCCESS,
    payload: response
  };
};

export const fetchSuggestedBeers = () => async (dispatch, getState) => {
  const response = await beers.get("/beers");
  let fetchedBeer = getState().beer.beer;
  let suggestedBeers = response.data.filter(beer => {
    return (
      beer.abv <= fetchedBeer.abv + 4 &&
      beer.abv >= fetchedBeer.abv - 4 &&
      beer.name !== fetchedBeer.name
    );
  });
  dispatch({
    type: FETCH_SUGGESTED,
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

export const resetSuggestedBeers = () => {
  return {
    type: RESET_SUGGESTED_BEERS
  };
};

export const updateSearch = value => {
  return {
    type: SEARCH,
    payload: value.toLowerCase()
  };
};
