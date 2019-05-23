import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { fetchBeer, reset } from "../actions";
import Spinner from "./spinner";
import PropTypes from "prop-types";

class BeerDetails extends Component {
  componentDidMount = () => {
    this.props.fetchBeer(this.props.match.params.id);
  };
  componentWillUnmount = () => {
    this.props.reset();
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { beer: state.beer };
};

export default connect(
  mapStateToProps,
  { fetchBeer, reset }
)(BeerDetails);

BeerDetails.propTypes = {
  beer: PropTypes.object
};
