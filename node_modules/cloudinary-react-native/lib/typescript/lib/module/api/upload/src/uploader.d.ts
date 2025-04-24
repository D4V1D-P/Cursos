export function upload(cloudinary: any, { file, headers, options, config, callback }: {
    file: any;
    headers?: {} | undefined;
    options?: {} | undefined;
    config?: null | undefined;
    callback: any;
}): Promise<void>;
export function unsignedUpload(cloudinary: any, { file, upload_preset, headers, options, config, callback }: {
    file: any;
    upload_preset: any;
    headers?: {} | undefined;
    options?: {} | undefined;
    config?: null | undefined;
    callback: any;
}): Promise<void>;
export function uploadBase64(cloudinary: any, { file, headers, options, config, callback }: {
    file: any;
    headers?: {} | undefined;
    options?: {} | undefined;
    config?: null | undefined;
    callback: any;
}): Promise<void>;
export function rename(cloudinary: any, { from_public_id, to_public_id, options, config, callback }: {
    from_public_id: any;
    to_public_id: any;
    options?: {} | undefined;
    config?: null | undefined;
    callback: any;
}): Promise<void>;
export function explicit(cloudinary: any, { publicId, options, config, callback }: {
    publicId: any;
    options?: {} | undefined;
    config?: null | undefined;
    callback: any;
}): Promise<void>;
//# sourceMappingURL=uploader.d.ts.map