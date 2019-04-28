import React from "react";
import { Route, Redirect } from "react-router-dom";

const ConditionComponentRoute = ({
  condition,
  failComponent,
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
        condition ? <Component {...props} /> : <failComponent {...props} />
      }
    />
  );
};

ConditionComponentRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  failComponent: PropTypes.object.isRequired
};
