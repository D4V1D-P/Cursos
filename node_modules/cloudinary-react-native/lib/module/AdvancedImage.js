function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Image, View } from 'react-native';
import 'react-native-url-polyfill/auto';
import { SDKAnalyticsConstants } from './internal/SDKAnalyticsConstants';
const AdvancedImage = props => {
  const {
    cldImg,
    ...rest // Assume any other props are for the base element
  } = props;
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
    source: {
      uri: cldImg.toURL({
        trackedAnalytics: SDKAnalyticsConstants
      })
    }
  })));
};
export default AdvancedImage;
//# sourceMappingURL=AdvancedImage.js.map