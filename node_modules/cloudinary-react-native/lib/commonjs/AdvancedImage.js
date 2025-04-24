"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
require("react-native-url-polyfill/auto");
var _SDKAnalyticsConstants = require("./internal/SDKAnalyticsConstants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AdvancedImage = props => {
  const {
    cldImg,
    ...rest // Assume any other props are for the base element
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, rest, {
    source: {
      uri: cldImg.toURL({
        trackedAnalytics: _SDKAnalyticsConstants.SDKAnalyticsConstants
      })
    }
  })));
};
var _default = exports.default = AdvancedImage;
//# sourceMappingURL=AdvancedImage.js.map