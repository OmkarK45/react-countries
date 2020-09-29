import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Countries from "./components/allCountries";
import Nav from './components/Nav'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all" exact component={Countries} />
          <Route path="/all/:country" exact component={Country} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
