import React from "react";
import Searchbar from "./Searchbar";
import "../scss/Header.scss";

const Header = props => {
  return (
    <div className="header">
      <div onClick={props.reset} className="header__logo">
        <span className="header__logo--1">BEER </span>
        <span className="header__logo--2"> EXPLORE</span>
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
