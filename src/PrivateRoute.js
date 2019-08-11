import React from 'react';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const PrivateRoute = ({
  condition,
  redirectURL,
  children,
  ...rest
}) => {
  if (!(condition && redirectURL)) {
    return <Route {...rest} />;
  }

  // condition
  return (
    <Route
      {...rest}
      render={(props) => (condition ? { children } : <failComponent {...props} />)}
    />
  );
};
PrivateRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  component: PropTypes.element.isRequired,
};
