import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSearch, fetchSearchBeers } from "../actions";
import PropTypes from "prop-types";
import * as S from "../styled-components/searchbar";
import { useDebounce } from "./useDebounce";

const DebouncedSearchbar = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  //
  useEffect(() => {
    if (debouncedSearchTerm) {
      props.updateSearch(searchTerm);
    }
    if (searchTerm.length === 0) {
      props.updateSearch(searchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <S.Searchbar>
      <S.SearchbarInput
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Type in beer name"
        value={searchTerm}
      />
    </S.Searchbar>
  );
};

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(mapStateToProps, { updateSearch, fetchSearchBeers })(
  DebouncedSearchbar
);

DebouncedSearchbar.propTypes = {
  searchTerm: PropTypes.string,
  updateSearch: PropTypes.func
};
