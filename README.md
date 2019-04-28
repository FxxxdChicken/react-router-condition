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

## Todo

hi
