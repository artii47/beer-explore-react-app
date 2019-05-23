import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers, fetchPage } from "../actions";
import Card from "./Card";
import Spinner from "./spinner";
import "../scss/Beers.scss";

class Beers extends Component {
  state = {
    page: 2
  };
  componentDidMount = () => {
    this.props.fetchBeers();
  };
  componentDidUpdate = prevProps => {
    if (
      this.props.searchTerm.length === 0 &&
      prevProps.searchTerm.length !== 0
    ) {
      this.props.fetchBeers();
    }
  };

  handleScroll = e => {
    let element = e.target;
    const scrollEnd =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (scrollEnd && this.props.searchTerm.length === 0) {
      this.setState({ page: this.state.page + 1 });
      this.props.fetchPage(this.state.page);
    }
  };

  renderBeers = () => {
    return this.props.beers.map(beer => {
      return (
        <Card
          key={beer.id}
          desc={beer.description}
          imgUrl={beer.image_url}
          beerName={beer.name}
          beerId={beer.id}
        />
      );
    });
  };

  render() {
    if (this.props.beers.length === 0) {
      return <Spinner />;
    }

    return (
      <div onScroll={this.handleScroll} className="beers">
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
  { fetchBeers, fetchPage }
)(Beers);
