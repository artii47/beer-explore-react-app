import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { fetchBeer, resetBeer } from "../actions";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import _ from "lodash";

class BeerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchBeer(this.props.match.params.id);
  };
  componentWillUnmount = () => {
    this.props.resetBeer();
  };
  componentDidUpdate = prevProps => {
    if (prevProps.beer === this.props.beer) {
      this.props.fetchBeer(this.props.match.params.id);
    }
  };
  renderYouMayAlsoLike = () => {
    const newBeers = this.props.beers.filter(beer => {
      return (
        beer.abv <= this.props.beer.abv + 2 &&
        beer.abv >= this.props.beer.abv - 2 &&
        beer.name !== this.props.beer.name
      );
    });
    return _.shuffle(newBeers);
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
          renderYouMayAlsoLike={this.renderYouMayAlsoLike}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { beer: state.beer, beers: Object.values(state.beers) };
};

export default connect(
  mapStateToProps,
  { fetchBeer, resetBeer }
)(BeerDetails);

BeerDetails.propTypes = {
  beer: PropTypes.object
};
