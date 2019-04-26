# react-router-condition
react-router-condition


```javascript
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ConditionRoute = ({ condition, redirectURL, component: Component, ...rest }) => (
  <Route {...rest} render={props => (condition ? <Component {...props} /> : <Redirect to={redirectURL} />)} />
);

ConditionRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
export default ConditionRoute;

```

```javascript
    <ConditionRoute condition={checkAuth()} redirectURL="/" path="/setting" component={Setting} />
```

## Todo

Redirect, Component 추가하기
