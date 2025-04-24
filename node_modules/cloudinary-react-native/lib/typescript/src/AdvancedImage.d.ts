import React from 'react';
import { ImageProps } from 'react-native';
import type { CloudinaryImage } from '@cloudinary/url-gen';
import 'react-native-url-polyfill/auto';
interface AdvancedImageProps extends Omit<ImageProps, 'source'> {
    cldImg: CloudinaryImage;
}
declare const AdvancedImage: React.FC<AdvancedImageProps>;
export default AdvancedImage;
//# sourceMappingURL=AdvancedImage.d.ts.map