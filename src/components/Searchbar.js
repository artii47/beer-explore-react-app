import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { search } from "../actions";

class Searchbar extends Component {


  onChangeHandler = e => {
    e.preventDefault();
    this.props.search(e.target.value);
  };

  render() {
    return (
      <div className="searchbar">
        <input onChange={this.onChangeHandler} className="searchbar__input" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { beers: Object.values(state.beers), searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { search }
)(Searchbar);
