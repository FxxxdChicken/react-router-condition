import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const PrivateRouteRedirect = ({
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
      render={() => (condition ? { children } : <Redirect to={redirectURL} />)}
    />
  );
};
PrivateRouteRedirect.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  component: PropTypes.object.isRequired,
};
