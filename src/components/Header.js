import React from "react";
import DebouncedSearchbar from "./DebouncedSearchbar";
import * as S from "../styled-components/header";

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
