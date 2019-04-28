"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ConditionRedirectRoute = function ConditionRedirectRoute(_ref) {
  var condition = _ref.condition,
      redirectURL = _ref.redirectURL,
      Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["condition", "redirectURL", "component"]);

  if (!(condition && redirectURL)) {
    return _react2.default.createElement(_reactRouterDom.Route, rest);
  }

  // condition
  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return condition ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: redirectURL });
    }
  }));
};
ConditionRedirectRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};