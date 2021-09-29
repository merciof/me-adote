import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import HomePage from "./HomePage";
import SearchParams from "./SearchParams";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={SearchParams} />
        <Route path="/details/:id" component={Details} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default Routes;
