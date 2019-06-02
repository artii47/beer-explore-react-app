import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { updateSearch, fetchSearchBeers } from "../actions";
import PropTypes from "prop-types";
import _ from "lodash";

class DebouncedSearchbar extends Component {
  static propTypes = {
    searchTerm: PropTypes.string,
    updateSearch: PropTypes.func
  };
  state = { searchTerm: "" };

  componentDidMount = () => {
    this.sendSearchTerm = _.debounce(this.sendSearchTerm, 500);
    this.setState({ searchTerm: this.props.searchTerm });
  };

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
    this.sendSearchTerm(e.target.value.trim());
  };

  sendSearchTerm = searchTerm => {
    this.props.updateSearch(searchTerm);
  };

  componentDidUpdate = () => {
    console.log("updated");
    if (this.props.searchTerm.length !== 0) {
      this.props.fetchSearchBeers(this.props.searchTerm);
    }
  };

  render() {
    return (
      <div className="searchbar">
        <input
          className="searchbar__input"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder="Type in beer name"
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
  { updateSearch, fetchSearchBeers }
)(DebouncedSearchbar);

// DebouncedSearchbar.propTypes = {
//   searchTerm: PropTypes.string
// };
