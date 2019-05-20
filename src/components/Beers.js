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
  componentDidUpdate = (prevProps) => {
    if(this.props.searchTerm.length === 0 && prevProps.searchTerm.length !== 0){
      this.props.fetchBeers();
    }
  }

  handleScroll = e => {
    let element = e.target
    
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log('call an action creator')
    }
  }

  renderBeers = () => {
    return this.props.beers.map((beer) => {
      return (
        <Card
            key={beer.id}
            desc={beer.description}
            imgUrl={beer.image_url}
            beerName={beer.name}
            beerId={beer.id}
          />
      )
    })
  }

  render() {
    if (this.props.beers.length === 0) {
      return <div className="lds-dual-ring" />;
    }

    return (
      <div onScroll={this.handleScroll} className='beers'>
        {this.renderBeers()}
      </div>
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
