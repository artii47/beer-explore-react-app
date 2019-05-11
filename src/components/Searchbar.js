import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";

class Searchbar extends Component {
  state = { searchTerm: "fake" };

  render() {
    return (
      <div className="searchbar">
        <input onChange={this.onChangeHandler} className="searchbar__input" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { beers: state.beers };
};

export default connect(mapStateToProps)(Searchbar);
