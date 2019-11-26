import { createSelector } from "reselect";

export const selectBeers = state => state.beers;
export const selectBeer = state => state.beer.beer;
export const selectSearchTerm = state => state.searchTerm;
export const selectIsFetching = state => state.beers.isFetching;
export const selectIsBeerFetching = state => state.beer.isBeerFetching;
export const selectIsPageFetching = state => state.beers.isPageFetching;
export const selectSuggestedBeers = state => state.suggestedBeers;

export const getBeers = createSelector([selectBeers], beers =>
  Object.values(beers.beers)
);
export const getBeer = createSelector([selectBeer], beer => beer);

export const getSearchTerm = createSelector(
  [selectSearchTerm],
  searchTerm => searchTerm
);

export const getIsFetching = createSelector(
  [selectIsFetching],
  isFetching => isFetching
);

export const getIsPageFetching = createSelector(
  [selectIsPageFetching],
  isPageFetching => isPageFetching
);

export const getIsBeerFetching = createSelector(
  [selectIsBeerFetching],
  isBeerFetching => isBeerFetching
);

export const getSuggestedBeers = createSelector(
  [selectSuggestedBeers],
  suggestedBeers => Object.values(suggestedBeers)
);
