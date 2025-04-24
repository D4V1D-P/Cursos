import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { Video } from 'expo-av';
import 'react-native-url-polyfill/auto';
import type { CloudinaryVideo } from '@cloudinary/url-gen';
interface AdvancedVideoProps {
    videoUrl?: string;
    cldVideo?: CloudinaryVideo;
    videoStyle?: StyleProp<ViewStyle>;
}
type VideoRef = Video | null;
declare const AdvancedVideo: React.ForwardRefExoticComponent<AdvancedVideoProps & React.RefAttributes<VideoRef>>;
export default AdvancedVideo;
//# sourceMappingURL=AdvancedVideo.d.ts.map