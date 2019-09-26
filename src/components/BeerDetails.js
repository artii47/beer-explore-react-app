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
import { Link } from "react-router-dom";
import * as S from "../styled-components/suggestedBeers";

const BeerDetails = props => {
  useEffect(() => {
    props.fetchBeer(props.match.params.id);
  }, []);

  useEffect(() => {
    if (props.beer.name) {
      props.fetchBeer(props.match.params.id);
    }
  }, [props.match.params.id]);

  useEffect(() => {
    if (props.beer.name) {
      props.fetchSuggestedBeers();
    }
  }, [props.beer.name]);

  useEffect(() => {
    return () => {
      props.resetBeer();
      props.resetSuggestedBeers();
    };
  }, []);

  const renderSuggestedBeers = () => {
    if (props.suggestedBeers.length === 0) {
      return <div></div>;
    }
    return props.suggestedBeers.slice(0, 3).map(beer => {
      return (
        <Link
          className="modal__youmayalsolike-item"
          to={`/beer/${beer.id}`}
          key={beer.id}
        >
          <React.Fragment>
            <S.SuggestedBeerName>
              {beer.name.length < 15
                ? beer.name
                : beer.name.slice(0, 15).concat("...")}
            </S.SuggestedBeerName>
            <S.SuggestedBeerImg src={beer.image_url} alt={beer.name} />
          </React.Fragment>
        </Link>
      );
    });
  };

  if (!props.beer) {
    return <Spinner />;
  }
  return (
    <div>
      <Modal
        tagline={props.beer.tagline}
        name={props.beer.name}
        img={props.beer.image_url}
        description={props.beer.description}
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

export default connect(
  mapStateToProps,
  { fetchBeer, resetBeer, fetchSuggestedBeers, resetSuggestedBeers }
)(BeerDetails);

BeerDetails.propTypes = {
  beer: PropTypes.object
};
