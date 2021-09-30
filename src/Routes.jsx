import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import HomePage from "./HomePage";
import SearchParams from "./SearchParams";
import cacheContext from "./cacheContext";
import { useState } from "react";

function Routes() {
  const cacheState = useState({});

  return (
    <Router>
      <Switch>
        <cacheContext.Provider value={cacheState}>
          <Route path="/search" component={SearchParams} />
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={HomePage} />
        </cacheContext.Provider>
      </Switch>
    </Router>
  );
}

export default Routes;
