import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBeers, fetchPage, fetchSearchBeers } from "../actions";
import Card from "./Card";
import Spinner from "./spinner";
import PropTypes from "prop-types";

import * as S from "../styled-components/beers";

const Beers = props => {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const { fetchBeers, fetchPage, fetchSearchBeers, searchTerm, beers } = props;

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  // useEffect(() => {
  //   if (searchTerm.length === 0 && beers.length !== 0) {
  //     fetchBeers();
  //   }
  // }, [searchTerm.length, fetchBeers, beers.length]);
  useEffect(() => {
    if (!searchTerm.length) {
      fetchBeers();
    }
  }, [searchTerm.length, fetchBeers]);

  useEffect(() => {
    if (searchTerm.length !== 0) {
      fetchSearchBeers(searchTerm);
    }
  }, [searchTerm, searchTerm.length, fetchSearchBeers]);

  useEffect(() => {
    if (searchTerm.length === 0 && beers.length === 0) {
      fetchBeers(searchTerm);
    }
  }, [searchTerm, fetchBeers, beers.length]);

  useEffect(() => {
    if (searchTerm.length === 0 && beers.length === 0) {
      fetchBeers();
    }
  }, [searchTerm.length, fetchBeers, beers.length]);

  const changeLoading = () => {
    setLoading(loading => !loading);
  };

  const handleScroll = e => {
    let element = e.target;
    const scrollEnd =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (scrollEnd && searchTerm.length === 0) {
      setPage(page + 1);
      fetchPage(page, changeLoading);
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

  if (beers.length === 0 && searchTerm.length !== 0) {
    return <S.BeersNotFound>No beers found ...</S.BeersNotFound>;
  }

  return (
    <S.Beers onScroll={handleScroll}>
      {beers.length === 0 || loading ? <Spinner /> : ""}
      {renderBeers()}
    </S.Beers>
  );
};

const mapStateToProps = state => {
  return { beers: Object.values(state.beers), searchTerm: state.searchTerm };
};

export default connect(mapStateToProps, {
  fetchBeers,
  fetchPage,
  fetchSearchBeers
})(Beers);

Beers.propTypes = {
  beers: PropTypes.array,
  searchTerm: PropTypes.string
};
