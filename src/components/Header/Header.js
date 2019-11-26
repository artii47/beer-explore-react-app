import React from "react";
import DebouncedSearchbar from "../SearchBar/DebouncedSearchbar";
import * as S from "./Header.styles.js";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <S.HeaderLogo1>BEER </S.HeaderLogo1>
        <S.HeaderLogo2> EXPLORE</S.HeaderLogo2>
      </S.HeaderLogo>
      <DebouncedSearchbar />
    </S.Header>
  );
};

export default Header;
