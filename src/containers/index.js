import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import favicon from "../images/favicon.png";
import Home from "./Home";
import Contest from "./Contest";
import NoMatch from "./404.jsx";
import Meetjs33 from "./Meetjs33";

const Routes = () => (
  <div className="app-container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/zadanie" component={Contest} />
        <Route path="/meetjs33" component={Meetjs33} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
