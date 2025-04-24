"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SDKAnalyticsConstants = void 0;
var _reactNative = require("react-native");
const getReactNativeVersion = () => {
  try {
    const version = _reactNative.Platform.Version;
    return version.toString();
  } catch {
    return '0.0.0';
  }
};
const getSDKVersion = () => {
  try {
    const SDKVersionPackageJson = require('../../package.json');
    if (SDKVersionPackageJson && SDKVersionPackageJson.version) {
      return SDKVersionPackageJson.version;
    }
  } catch {
    return '0.0.0';
  }
  return '0.0.0';
};
const getOSType = () => {
  switch (_reactNative.Platform.OS) {
    case 'android':
      return 'A';
    case 'ios':
      return 'B';
    default:
      return 'Z';
  }
};
const getOSVersion = () => {
  switch (_reactNative.Platform.OS) {
    case 'android':
      return _reactNative.Platform.Version ? _reactNative.Platform.Version.toString() : 'AA';
    case 'ios':
      return _reactNative.Platform.Version ? _reactNative.Platform.Version.toString() : 'AA';
    default:
      return 'AA';
  }
};
const SDKAnalyticsConstants = exports.SDKAnalyticsConstants = {
  sdkSemver: getSDKVersion(),
  techVersion: getReactNativeVersion(),
  sdkCode: 'P',
  osType: getOSType(),
  osVersion: getOSVersion()
};
//# sourceMappingURL=SDKAnalyticsConstants.js.map