import React from "react";
import DebouncedSearchbar from "./DebouncedSearchbar";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <span className="header__logo--1">BEER </span>
        <span className="header__logo--2"> EXPLORE</span>
      </div>
      <DebouncedSearchbar />
    </div>
  );
};

export default Header;
