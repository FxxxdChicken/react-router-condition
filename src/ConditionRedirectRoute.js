import React from "react";
import { Route, Redirect } from "react-router-dom";

const ConditionRedirectRoute = ({
  condition,
  redirectURL,
  component: Component,
  ...rest
}) => {
  if (!(condition && redirectURL)) {
    return <Route {...rest} />;
  }

  // condition
  return (
    <Route
      {...rest}
      render={props =>
        condition ? <Component {...props} /> : <Redirect to={redirectURL} />
      }
    />
  );
};
ConditionRedirectRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};
