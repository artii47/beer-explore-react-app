import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers, fetchPage, fetchSearchBeers } from "../actions";
import Card from "./Card";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import "../scss/Beers.scss";

class Beers extends Component {
  state = {
    page: 2,
    isLoading: false
  };

  componentDidMount = () => {
    this.props.fetchBeers();
  };
  changeLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };
  componentDidUpdate = prevProps => {
    if (
      this.props.searchTerm.length === 0 &&
      prevProps.searchTerm.length !== 0
    ) {
      this.props.fetchBeers();
    }
  };

  handleScroll = e => {
    let element = e.target;
    const scrollEnd =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (scrollEnd && this.props.searchTerm.length === 0) {
      this.setState(currState => ({
        page: currState.page + 1
      }));
      this.props.fetchPage(this.state.page, this.changeLoading);
    }
  };

  renderBeers = () => {
    return this.props.beers.map(beer => {
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

  render() {
    if (this.props.beers.length === 0) {
      return <Spinner />;
    }

    return (
      <div onScroll={this.handleScroll} className="beers">
        {this.renderBeers()}
        {this.state.isLoading ? <Spinner bottom={"bottom"} /> : ""}
      </div>
    );
  }
}

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
