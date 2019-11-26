import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBeers, getSearchTerm } from "../../selectors/selectors";
import { fetchBeersStart, fetchSearchBeersStart } from "../../actions";
import Beers from "./Beers";

export const BeersContainer = () => {
  const dispatch = useDispatch();
  const beers = useSelector(getBeers);
  const searchTerm = useSelector(getSearchTerm);
  useEffect(() => {
    if (!searchTerm.length) {
      dispatch(fetchBeersStart());
    }
  }, [searchTerm.length, dispatch]);

  useEffect(() => {
    if (searchTerm.length !== 0) {
      dispatch(fetchSearchBeersStart(searchTerm));
    }
  }, [searchTerm, searchTerm.length, dispatch]);

  useEffect(() => {
    if (searchTerm.length === 0 && beers.length === 0) {
      dispatch(fetchBeersStart());
    }
  }, [searchTerm.length, beers.length, dispatch]);
  return <Beers />;
};
export default BeersContainer;
