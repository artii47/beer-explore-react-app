import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { updateSearch, fetchSearchBeers } from "../actions";
import PropTypes from "prop-types";
import { debounce } from "lodash";

class DebouncedSearchbar extends Component {
  static propTypes = {
    searchTerm: PropTypes.string,
    updateSearch: PropTypes.func
  };
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = debounce(text => {
    this.props.updateSearch(text);
  }, 500);

  render() {
    return (
      <div className="searchbar">
        <input
          className="searchbar__input"
          onChange={e => {
            this.setState({ searchTerm: e.target.value });
            this.handleSearchTermChange(e.target.value);
          }}
          placeholder="Type in beer name"
          value={this.state.searchTerm}
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
