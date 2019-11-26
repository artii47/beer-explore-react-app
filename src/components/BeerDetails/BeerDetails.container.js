import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetBeer,
  fetchSuggestedBeers,
  resetSuggestedBeers,
  fetchBeerStart
} from "../../actions";
import { getBeer } from "../../selectors/selectors";
import BeerDetails from "./BeerDetails";

const BeerDetailsContainer = props => {
  const { match } = props;
  const dispatch = useDispatch();
  const beer = useSelector(getBeer);
  useEffect(() => {
    dispatch(fetchBeerStart(match.params.id));
  }, [match.params.id, dispatch]);

  useEffect(() => {
    if (beer.name) {
      dispatch(fetchSuggestedBeers());
    }
  }, [beer.name, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetBeer());
      dispatch(resetSuggestedBeers());
    };
  }, [dispatch]);
  return <BeerDetails />;
};
export default BeerDetailsContainer;
