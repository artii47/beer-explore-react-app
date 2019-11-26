import { all, call } from "redux-saga/effects";

import { beersSagas } from "./beers.sagas";
import { beerSagas } from "./beer.sagas";

export default function* rootSaga() {
  yield all([call(beersSagas), call(beerSagas)]);
}
