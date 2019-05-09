import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBeers} from '../actions';
import Card from './Card';

class Beers extends Component {
  componentDidMount = () => {
    this.props.fetchBeers();
  }
  render() {
    return (
      <div>
        {this.props.beers.map((beer) => {
          return <Card beerId={beer.id} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {beers: Object.values(state.beers)}
}

export default connect(
  mapStateToProps,
  { fetchBeers }
)(Beers);
