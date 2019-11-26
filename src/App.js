import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalStyles } from "./global-styles";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  const BeersContainer = lazy(() =>
    import("./components/Beers/Beers.container")
  );
  const BeerDetailsContainer = lazy(() =>
    import("./components/BeerDetails/BeerDetails.container")
  );

  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" component={BeersContainer} />
            <Route path="/beer/:id" component={BeerDetailsContainer} />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default App;
