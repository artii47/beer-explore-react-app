import { takeLatest, call, put, all } from "redux-saga/effects";
import beers from "../apis/beers";
import {
  fetchBeersSuccess,
  fetchPageSuccess,
  fetchSearchBeersSuccess
} from "../actions/index";
import {
  FETCH_BEERS_START,
  FETCH_SEARCH_BEERS_START,
  FETCH_PAGE_START
} from "../actions/types";
export function* fetchBeersAsync() {
  try {
    const response = yield beers.get("/beers");
    yield put(fetchBeersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPageAsync({ payload: { page } }) {
  try {
    const response = yield beers.get(`/beers?page=${page}`);
    yield put(fetchPageSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSearchBeersAsync({ payload: { searchTerm } }) {
  try {
    const response = yield beers.get(`/beers?beer_name=${searchTerm}`);
    yield put(fetchSearchBeersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchBeersStart() {
  yield takeLatest(FETCH_BEERS_START, fetchBeersAsync);
}

export function* fetchPageStart() {
  yield takeLatest(FETCH_PAGE_START, fetchPageAsync);
}

export function* fetchSearchBeersStart() {
  yield takeLatest(FETCH_SEARCH_BEERS_START, fetchSearchBeersAsync);
}

export function* beersSagas() {
  yield all([
    call(fetchBeersStart),
    call(fetchPageStart),
    call(fetchSearchBeersStart)
  ]);
}
