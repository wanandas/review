import React from "react";
import { Switch, Route } from "react-router-dom";

import HomepageComponent from "./pages/homepage/homepage.componnent";
import AboutComponent from "./pages/about/about.componnent";
import ReviewsComponent from "./pages/reviews/reviews.component";

import Header from "./components/header/header.component";
import { ReviewRoute } from "./pages/review/review-route.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/review" component={ReviewsComponent} />
        <Route path="/review/item" component={ReviewRoute} />
        <Route
          path="/external"
          component={() => {
            window.location = "https://review-toon.firebaseapp.com/";
            return null;
          }}
        />

        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
