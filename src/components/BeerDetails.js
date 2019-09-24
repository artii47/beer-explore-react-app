import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { fetchBeer, resetBeer, fetchSuggestedBeers } from "../actions";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import _ from "lodash";

class BeerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchBeer(this.props.match.params.id);
    this.props.fetchSuggestedBeers();
  };
  componentWillUnmount = () => {
    this.props.resetBeer();
  };
  componentDidUpdate = prevProps => {
    if (prevProps.match.url !== this.props.match.url) {
      this.props.fetchBeer(this.props.match.params.id);
      this.props.fetchSuggestedBeers();
    }
    if (!this.props.beer.name) {
      this.props.fetchSuggestedBeers();
    }
  };
  renderSuggestedBeers = () => {
    return this.props.suggestedBeers.slice(0, 3).map(beer => {
      return (
        <Link
          className="modal__youmayalsolike__item"
          to={`/beer/${beer.id}`}
          key={beer.id}
        >
          <React.Fragment>
            <div className="modal__youmayalsolike__beername">
              {beer.name.length < 20
                ? beer.name
                : beer.name.slice(0, 19).concat("...")}
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
  render() {
    if (!this.props.beer) {
      return <Spinner />;
    }
    return (
      <div>
        <Modal
          tagline={this.props.beer.tagline}
          name={this.props.beer.name}
          img={this.props.beer.image_url}
          description={this.props.beer.description}
          renderSuggestedBeers={this.renderSuggestedBeers}
        />
      </div>
    );
  }
}

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
