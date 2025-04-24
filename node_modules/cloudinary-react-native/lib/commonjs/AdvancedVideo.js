"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _expoAv = require("expo-av");
require("react-native-url-polyfill/auto");
var _SDKAnalyticsConstants = require("./internal/SDKAnalyticsConstants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AdvancedVideo = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const getVideoUri = () => {
    const {
      videoUrl,
      cldVideo
    } = props;
    if (videoUrl) {
      return videoUrl;
    }
    if (cldVideo) {
      return cldVideo.toURL({
        trackedAnalytics: _SDKAnalyticsConstants.SDKAnalyticsConstants
      });
    }
    return '';
  };
  const {
    videoStyle
  } = props;
  const videoUri = getVideoUri();
  if (!videoUri) {
    console.warn('Video URI is empty. Cannot play the video.');
  }
  return /*#__PURE__*/_react.default.createElement(_expoAv.Video, {
    ref: ref,
    source: {
      uri: videoUri
    },
    style: videoStyle,
    useNativeControls: true // Enable native controls
  });
});
var _default = exports.default = AdvancedVideo;
//# sourceMappingURL=AdvancedVideo.js.map