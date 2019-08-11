import React from 'react';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const ConditionComponentRoute = ({
  condition,
  failComponent,
  component: Component,
  ...rest
}) => {
  if (!(condition)) {
    return <Route {...rest} />;
  }

  // condition
  return (
    <Route
      {...rest}
      render={(props) => (condition ? <Component {...props} /> : <failComponent {...props} />)}
    />
  );
};

ConditionComponentRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  failComponent: PropTypes.element.isRequired,
};
