import React from "react";
import BeersContainer from "./components/Beers/Beers.container";
import { BrowserRouter, Route } from "react-router-dom";
import BeerDetailsContainer from "./components/BeerDetails/BeerDetails.container";
import Header from "./components/Header/Header";
import { GlobalStyles } from "./global-styles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Route path="/" component={BeersContainer} />
        <Route path="/beer/:id" component={BeerDetailsContainer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
