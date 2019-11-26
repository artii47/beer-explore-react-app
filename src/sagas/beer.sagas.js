import { takeLatest, call, put, all } from "redux-saga/effects";
import { FETCH_BEER_START } from "../actions/types";
import beers from "../apis/beers";
import { fetchBeerSuccess, resetSuggestedBeers } from "../actions";

export function* fetchBeerAsync({ payload: { beerId } }) {
  try {
    console.log(beerId);
    const response = yield beers.get(`/beers/${beerId}`);
    yield put(resetSuggestedBeers());
    yield put(fetchBeerSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchBeerStart() {
  yield takeLatest(FETCH_BEER_START, fetchBeerAsync);
}

export function* beerSagas() {
  yield all([call(fetchBeerStart)]);
}
