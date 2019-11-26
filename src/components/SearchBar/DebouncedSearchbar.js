import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../actions";
import PropTypes from "prop-types";
import * as S from "./DebouncedSearchbar.styles";
import { useDebounce } from "../../helpers/useDebounce";

const DebouncedSearchbar = props => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(updateSearch(searchTerm));
    }
    if (searchTerm.length === 0) {
      dispatch(updateSearch(searchTerm));
    }
  }, [debouncedSearchTerm, searchTerm, dispatch]);

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

export default DebouncedSearchbar;

DebouncedSearchbar.propTypes = {
  searchTerm: PropTypes.string,
  updateSearch: PropTypes.func
};
