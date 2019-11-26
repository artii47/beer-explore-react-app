import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageStart } from "../../actions";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import {
  getBeers,
  getSearchTerm,
  getIsFetching,
  getIsPageFetching
} from "../../selectors/selectors";

import * as S from "./Beers.styles";

const Beers = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const isFetching = useSelector(getIsFetching);
  const isPageFetching = useSelector(getIsPageFetching);
  const beers = useSelector(getBeers);
  const searchTerm = useSelector(getSearchTerm);

  const handleScroll = e => {
    let element = e.target;
    const scrollEnd =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (scrollEnd && searchTerm.length === 0) {
      setPage(page + 1);
      dispatch(fetchPageStart(page));
    }
  };

  const renderBeers = () => {
    return beers.map(beer => {
      return (
        <Card
          key={beer.id}
          desc={beer.description}
          imgUrl={beer.image_url}
          beerName={beer.name}
          beerId={beer.id}
        />
      );
    });
  };
  if (isFetching) {
    return <Spinner />;
  } else if (!beers.length) {
    return <S.BeersNotFound>Beers not found</S.BeersNotFound>;
  }
  return (
    <S.Beers onScroll={handleScroll}>
      {isPageFetching ? <Spinner /> : ""}
      {renderBeers()}
    </S.Beers>
  );
};

export default Beers;

Beers.propTypes = {
  beers: PropTypes.array,
  searchTerm: PropTypes.string
};
