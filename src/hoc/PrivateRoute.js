import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      render={() =>
        authenticated === true ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
