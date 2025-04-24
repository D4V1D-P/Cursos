export declare const apiVersion = "v1_1";
export declare const defaultResourceType = "image";
export declare const defaultChunckSize: number;
export declare const defaultTimeout = 60;
export declare const defaultUploadPrefix = "https://api.cloudinary.com";
export declare const uploadPrefixKey = "upload_prefix";
declare class APIConfig {
    uploadPrefix: string;
    chunkSize: number;
    timeout: number;
    callbackUrl: string;
    cloudName: string;
    apiKey: string | null;
    apiSecret: string | null;
}
export { APIConfig };
//# sourceMappingURL=api-config.d.ts.map