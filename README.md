# react-router-condition
react-router-condition


### install
```
npm i --save react-router-condition
```


### use case 1
```javascript
import { ConditionRedirectRoute as Route } from "react-router-condition";
    
<Route path="/setting" condition={checkAuth()} component={Setting} redirectURL="/" />

```

### use case 2
```javascript
import { ConditionComponentRoute as Route } from "react-router-condition";
    
<Route path="/setting" condition={checkAuth()} component={Setting} failComponent={Login} />

```

### use case 3
```javascript
import { PrivateRoute } from "react-router-condition";
    
<PrivateRoute condition={checkAuth()}  redirectURL="/">
    <Route path="/setting" Compontent={Setting} />
    <Route path="/profile" Compontent={Profile} />
<PrivateRoute />

```


### use case 4
```javascript
import { PrivateRoute } from "react-router-condition";
    
<PrivateRoute condition={checkAuth()}  redirect={Login}>
    <Route path="/setting" Compontent={Setting} />
    <Route path="/profile" Compontent={Profile} />
<PrivateRoute />

```




## Todo

hi
