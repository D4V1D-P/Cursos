import React from 'react';
import { Video } from 'expo-av';
import 'react-native-url-polyfill/auto';
import { SDKAnalyticsConstants } from './internal/SDKAnalyticsConstants';
const AdvancedVideo = /*#__PURE__*/React.forwardRef((props, ref) => {
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
        trackedAnalytics: SDKAnalyticsConstants
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
  return /*#__PURE__*/React.createElement(Video, {
    ref: ref,
    source: {
      uri: videoUri
    },
    style: videoStyle,
    useNativeControls: true // Enable native controls
  });
});
export default AdvancedVideo;
//# sourceMappingURL=AdvancedVideo.js.map