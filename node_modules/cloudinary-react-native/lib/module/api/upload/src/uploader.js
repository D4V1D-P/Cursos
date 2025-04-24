import { buildRequest, makeRequest } from './uploader_utils';
export async function upload(cloudinary, {
  file,
  headers = {},
  options = {},
  config = null,
  callback
}) {
  const request = await buildRequest(cloudinary, 'upload', {
    file,
    headers,
    options,
    config
  });
  return makeRequest(request, callback);
}
;
export function unsignedUpload(cloudinary, {
  file,
  upload_preset,
  headers = {},
  options = {},
  config = null,
  callback
}) {
  options.upload_preset = upload_preset;
  options.unsigned = true;
  return upload(cloudinary, {
    file,
    headers,
    options,
    config: config,
    callback
  });
}
export function uploadBase64(cloudinary, {
  file,
  headers = {},
  options = {},
  config = null,
  callback
}) {
  file = 'data:image/jpeg;base64,' + file;
  return upload(cloudinary, {
    file,
    headers,
    options,
    config: config,
    callback
  });
}
;
export async function rename(cloudinary, {
  from_public_id,
  to_public_id,
  options = {},
  config = null,
  callback
}) {
  options.from_public_id = from_public_id;
  options.to_public_id = to_public_id;
  const request = await buildRequest(cloudinary, 'rename', {
    file: undefined,
    headers: undefined,
    options,
    config
  });
  return makeRequest(request, callback);
}
;
export async function explicit(cloudinary, {
  publicId,
  options = {},
  config = null,
  callback
}) {
  options.public_id = publicId;
  const request = await buildRequest(cloudinary, 'explicit', {
    headers: undefined,
    options,
    config
  });
  return makeRequest(request, callback);
}
;
//# sourceMappingURL=uploader.js.map