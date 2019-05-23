import { combineReducers } from "redux";
import beersReducer from "./beersReducer";
import beerReducer from "./beerReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  beers: beersReducer,
  beer: beerReducer,
  searchTerm: searchReducer
});
