import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers } from "../actions";
import Card from "./Card";
import "../scss/spinner.scss";
import '../scss/Beers.scss';

class Beers extends Component {
  componentDidMount = () => {
    this.props.fetchBeers();
  };

  render() {
    if (this.props.beers.length === 0) {
      return <div className="lds-dual-ring" />;
    }
    const filteredBeers = this.props.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.props.searchTerm);
    });

    return (
      <React.Fragment>
        {filteredBeers.map(beer => {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { beers: Object.values(state.beers), searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { fetchBeers }
)(Beers);
