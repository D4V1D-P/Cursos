"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPrefixKey = exports.defaultUploadPrefix = exports.defaultTimeout = exports.defaultResourceType = exports.defaultChunckSize = exports.apiVersion = exports.APIConfig = void 0;
const apiVersion = exports.apiVersion = 'v1_1';
const defaultResourceType = exports.defaultResourceType = 'image';
const defaultChunckSize = exports.defaultChunckSize = 20 * 1024 * 1024;
const defaultTimeout = exports.defaultTimeout = 60;
const defaultUploadPrefix = exports.defaultUploadPrefix = 'https://api.cloudinary.com';
const uploadPrefixKey = exports.uploadPrefixKey = 'upload_prefix';
const chunkSizeKey = 'chunk_size';
const readTimeoutKey = 'read_timeout';
const connectionTimeoutKey = 'connect_timeout';
const callbackUrlKey = 'callback_url';
var signature_algorithm = "sha1";
class APIConfig {
  uploadPrefix = defaultUploadPrefix;
  chunkSize = 0;
  timeout = 0;
  callbackUrl = '';
  cloudName = '';
  apiKey = '';
  apiSecret = '';
}
exports.APIConfig = APIConfig;
//# sourceMappingURL=api-config.js.map