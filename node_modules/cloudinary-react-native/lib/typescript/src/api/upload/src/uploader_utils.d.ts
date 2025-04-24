import { APIConfig } from '../config/api-config';
import { UploadRequest } from '../model/upload-request';
import { Cloudinary } from '@cloudinary/url-gen';
import { UploadApiOptions, UploadResponseCallback } from '../model/params/upload-params';
export declare function buildRequest(cloudinary: Cloudinary, action: string, { file, headers, options, config }: {
    file?: any | undefined;
    headers?: HeadersInit_ | undefined;
    options?: UploadApiOptions;
    config?: APIConfig | null;
}): Promise<UploadRequest>;
export declare function makeRequest(request: UploadRequest, callback?: UploadResponseCallback): Promise<void>;
//# sourceMappingURL=uploader_utils.d.ts.map