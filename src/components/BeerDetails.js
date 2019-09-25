import React, { useEffect } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { fetchBeer, resetBeer, fetchSuggestedBeers } from "../actions";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BeerDetails = props => {
  useEffect(() => {
    props.fetchBeer(props.match.params.id);
  }, []);

  useEffect(() => {
    props.fetchBeer(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    props.fetchSuggestedBeers();
  }, [props.beer.name]);

  useEffect(() => {
    return () => {
      props.resetBeer();
    };
  }, []);

  const renderSuggestedBeers = () => {
    if (props.suggestedBeers.length === 0) {
      return <div></div>;
    }
    return props.suggestedBeers.slice(0, 3).map(beer => {
      return (
        <Link
          className="modal__youmayalsolike__item"
          to={`/beer/${beer.id}`}
          key={beer.id}
        >
          <React.Fragment>
            <div className="modal__youmayalsolike__beername">
              {beer.name.length < 15
                ? beer.name
                : beer.name.slice(0, 15).concat("...")}
            </div>
            <img
              className="modal__youmayalsolike__img"
              src={beer.image_url}
              alt={beer.name}
            />
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
  { fetchBeer, resetBeer, fetchSuggestedBeers }
)(BeerDetails);

BeerDetails.propTypes = {
  beer: PropTypes.object
};
