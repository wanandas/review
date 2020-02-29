import React from "react";
import { Switch, Route } from "react-router-dom";

import HomepageComponent from "./pages/homepage/homepage.componnent";
import AboutComponent from "./pages/about/about.componnent";
import ReviewComponent from "./pages/review/review.component";

import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/review" component={ReviewComponent} />
      </Switch>
    </div>
  );
}

export default App;
