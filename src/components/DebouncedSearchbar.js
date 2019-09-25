import React, { useState, useEffect } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { updateSearch, fetchSearchBeers } from "../actions";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const DebouncedSearchbar = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = debounce(text => {
    props.updateSearch(text);
  }, 500);

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        onChange={e => {
          setSearchTerm(e.target.value);
          handleSearchTermChange(e.target.value);
        }}
        placeholder="Type in beer name"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { updateSearch, fetchSearchBeers }
)(DebouncedSearchbar);

DebouncedSearchbar.propTypes = {
  searchTerm: PropTypes.string,
  updateSearch: PropTypes.func
};
