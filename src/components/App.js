import React, { Component } from "react";
import Beers from "./Beers";
import "../scss/base.scss";
import "../scss/App.scss";
import { Router, Route } from "react-router-dom";
import BeerDetails from "./BeerDetails";
import history from "../history";
import SearchBar from "./Searchbar";

class App extends Component {
  handleScroll = () => {
    console.log('fds')
  }
  render() {
    return (
      <div>
        <SearchBar />
        <div onScroll={this.handleScroll} className="container">
          <Router history={history}>
            <Route path="/" component={Beers} />
            <Route path="/beer/:id" component={BeerDetails} />
          </Router>
        </div>
        </div>
    );
  }
}

export default App;
