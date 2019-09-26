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

  useEffect(() => {
    props.fetchBeers();
  }, []);

  useEffect(() => {
    if (props.searchTerm.length === 0 && props.beers.length !== 0) {
      props.fetchBeers();
    }
  }, [props.searchTerm.length]);

  useEffect(() => {
    if (props.searchTerm.length !== 0) {
      props.fetchSearchBeers(props.searchTerm);
    }
  }, [props.searchTerm]);

  const changeLoading = () => {
    setLoading(loading => !loading);
  };

  const handleScroll = e => {
    let element = e.target;
    const scrollEnd =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (scrollEnd && props.searchTerm.length === 0) {
      setPage(page + 1);
      props.fetchPage(page, changeLoading);
    }
  };

  const renderBeers = () => {
    return props.beers.map(beer => {
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

  if (props.beers.length === 0 && props.searchTerm.length !== 0) {
    return <S.BeersNotFound>No beers found ...</S.BeersNotFound>;
  }

  return (
    <S.Beers onScroll={handleScroll}>
      {props.beers.length === 0 || loading ? <Spinner /> : ""}
      {renderBeers()}
    </S.Beers>
  );
};

const mapStateToProps = state => {
  return { beers: Object.values(state.beers), searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { fetchBeers, fetchPage, fetchSearchBeers }
)(Beers);

Beers.propTypes = {
  beers: PropTypes.array,
  searchTerm: PropTypes.string
};
