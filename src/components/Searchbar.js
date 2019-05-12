import React, { Component } from "react";
import "../scss/Searchbar.scss";
import { connect } from "react-redux";
import { search, fetchSearchBeers } from "../actions";

//https://api.punkapi.com/v2/beers?beer_name=Buzz

class Searchbar extends Component {

  state = {searchTerm: ''}

  onChangeHandler = e => {
    this.props.search(e.target.value);
  };

  componentDidUpdate = () => {
    if(this.props.searchTerm.length !== 0){
      this.props.fetchSearchBeers(this.props.searchTerm);
    }
  }

  render() {
    return (
      <div className="searchbar">
        <input value={this.props.searchTerm} onChange={this.onChangeHandler} className="searchbar__input" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { search, fetchSearchBeers }
)(Searchbar);
