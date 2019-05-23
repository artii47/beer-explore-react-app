import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { search, fetchSearchBeers } from "../actions";
import PropTypes from "prop-types";
import _ from "lodash";

//https://api.punkapi.com/v2/beers?beer_name=Buzz

class Searchbar extends Component {
  onChangeHandler = e => {
    this.props.search(e.target.value);
  };

  debounceEvent = (...args) => {
    this.debouncedEvent = _.debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  };

  componentDidUpdate = () => {
    if (this.props.searchTerm.length !== 0) {
      this.props.fetchSearchBeers(this.props.searchTerm);
    }
  };

  render() {
    return (
      <div className="searchbar">
        <input
          onChange={this.debounceEvent(this.onChangeHandler, 400)}
          className="searchbar__input"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { search, fetchSearchBeers }
)(Searchbar);

Searchbar.propTypes = {
  searchTerm: PropTypes.string
};
