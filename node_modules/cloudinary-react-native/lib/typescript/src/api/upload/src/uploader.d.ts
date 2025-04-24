import { UploadApiOptions, UploadResponseCallback } from '../model/params/upload-params';
import { Cloudinary } from '@cloudinary/url-gen';
import { APIConfig } from '../config/api-config';
export declare function upload(cloudinary: Cloudinary, { file, headers, options, config, callback }: {
    file: any;
    headers?: HeadersInit_;
    options?: UploadApiOptions;
    config?: APIConfig | null;
    callback?: UploadResponseCallback;
}): Promise<void>;
export declare function unsignedUpload(cloudinary: Cloudinary, { file, upload_preset, headers, options, config, callback }: {
    file: any;
    upload_preset: string;
    headers?: HeadersInit_;
    options?: UploadApiOptions;
    config?: APIConfig | null;
    callback?: UploadResponseCallback;
}): Promise<void>;
export declare function uploadBase64(cloudinary: Cloudinary, { file, headers, options, config, callback }: {
    file: any;
    headers?: HeadersInit_;
    options?: UploadApiOptions;
    config?: APIConfig | null;
    callback?: UploadResponseCallback;
}): Promise<void>;
export declare function rename(cloudinary: Cloudinary, { from_public_id, to_public_id, options, config, callback }: {
    from_public_id: string;
    to_public_id: string;
    options?: UploadApiOptions;
    config?: APIConfig | null;
    callback?: UploadResponseCallback;
}): Promise<void>;
export declare function explicit(cloudinary: Cloudinary, { publicId, options, config, callback }: {
    publicId: string;
    options?: UploadApiOptions;
    config?: APIConfig | null;
    callback?: UploadResponseCallback;
}): Promise<void>;
//# sourceMappingURL=uploader.d.ts.map