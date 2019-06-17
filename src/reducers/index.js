import { combineReducers } from "redux";
import beersReducer from "./beersReducer";
import beerReducer from "./beerReducer";
import searchReducer from "./searchReducer";
import suggestedBeersReducer from "./suggestedBeersReducer";

export default combineReducers({
  beers: beersReducer,
  beer: beerReducer,
  searchTerm: searchReducer,
  suggestedBeers: suggestedBeersReducer
});
