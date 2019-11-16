import React, { useEffect } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import {
  fetchBeer,
  resetBeer,
  fetchSuggestedBeers,
  resetSuggestedBeers
} from "../actions";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import * as S from "../styled-components/suggestedBeers";

const BeerDetails = props => {
  const {
    fetchBeer,
    fetchSuggestedBeers,
    match,
    beer,
    resetBeer,
    resetSuggestedBeers,
    suggestedBeers
  } = props;

  useEffect(() => {
    fetchBeer(match.params.id);
  }, [fetchBeer, match.params.id]);

  useEffect(() => {
    if (beer.name) {
      fetchSuggestedBeers();
    }
  }, [beer.name, fetchSuggestedBeers]);

  useEffect(() => {
    return () => {
      resetBeer();
      resetSuggestedBeers();
    };
  }, [resetBeer, resetSuggestedBeers]);

  const renderSuggestedBeers = () => {
    if (suggestedBeers.length === 0) {
      return <div></div>;
    }
    return suggestedBeers.slice(0, 3).map(beer => {
      return (
        <S.SuggestedItem to={`/beer/${beer.id}`} key={beer.id}>
          <React.Fragment>
            <S.SuggestedBeerName>
              {beer.name.length < 15
                ? beer.name
                : beer.name.slice(0, 15).concat("...")}
            </S.SuggestedBeerName>
            <S.SuggestedBeerImg src={beer.image_url} alt={beer.name} />
          </React.Fragment>
        </S.SuggestedItem>
      );
    });
  };

  if (!beer) {
    return <Spinner />;
  }
  return (
    <div>
      <Modal
        tagline={beer.tagline}
        name={beer.name}
        img={beer.image_url}
        description={beer.description}
        renderSuggestedBeers={renderSuggestedBeers}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer,
    beers: Object.values(state.beers),
    suggestedBeers: Object.values(state.suggestedBeers)
  };
};

export default connect(mapStateToProps, {
  fetchBeer,
  resetBeer,
  fetchSuggestedBeers,
  resetSuggestedBeers
})(BeerDetails);

BeerDetails.propTypes = {
  beer: PropTypes.object
};
