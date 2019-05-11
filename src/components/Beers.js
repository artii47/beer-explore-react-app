import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers } from "../actions";
import Card from "./Card";
import "../scss/spinner.scss";

class Beers extends Component {
  componentDidMount = () => {
    this.props.fetchBeers();
  };

  render() {
    if (this.props.beers.length === 0) {
      return <div className="lds-dual-ring" />;
    }

    return (
      <React.Fragment>
        {this.props.beers.map(beer => {
          return (
            <Card
              key={beer.id}
              desc={beer.description}
              imgUrl={beer.image_url}
              beerName={beer.name}
              beerId={beer.id}
            />
          );
        })}
        <nav ref={this.nav} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { beers: Object.values(state.beers) };
};

export default connect(
  mapStateToProps,
  { fetchBeers }
)(Beers);
