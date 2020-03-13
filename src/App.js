import React from "react";
import { Switch, Route } from "react-router-dom";

import HomepageComponent from "./pages/homepage/homepage.componnent";
import AboutComponent from "./pages/about/about.componnent";
import ReviewsComponent from "./pages/reviews/reviews.component";

import Header from "./components/header/header.component";
import { ReviewRoute } from "./pages/review/review-route.component";
import Loginpage from "./pages/login/loginpage.component";

import PrivateRoute from "./Route/PrivateRoute/priteRoute.component";
import EditComponent from "./components/edit/edit.component";

function App() {
  const state = {
    loggedIn: false
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/review" component={ReviewsComponent} />
        <Route path="/review/item" component={ReviewRoute} />
        <PrivateRoute
          isLoggedIn={state.loggedIn}
          path="/edit"
          component={EditComponent}
        />

        <Route exact path="/login" component={Loginpage} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
