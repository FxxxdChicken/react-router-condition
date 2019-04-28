import React from "react";
import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";

const ConditionRouteRedirect = ({
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
ConditionRouteRedirect.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};
export { ConditionRouteRedirect };
