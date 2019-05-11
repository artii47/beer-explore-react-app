import {combineReducers} from 'redux';
import beersReducer from './beersReducer';
import beerReducer from './beerReducer';

export default combineReducers({
  beers: beersReducer,
  beer: beerReducer
})