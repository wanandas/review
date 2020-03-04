import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Review } from "./review.component";

export const ReviewRoute = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Route path={`${path}/:id`} component={Review} />
    </div>
  );
};
