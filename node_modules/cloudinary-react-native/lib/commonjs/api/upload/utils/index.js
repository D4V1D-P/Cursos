"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashToParameters = hashToParameters;
exports.present = present;
exports.process_request_params = process_request_params;
exports.timestamp = void 0;
var _consts = require("./consts");
var _util = require("util");
var Crypto = _interopRequireWildcard(require("expo-crypto"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const entries = require('./entries');
const toArray = require('./toArray');
const timestamp = () => Math.floor(new Date().getTime() / 1000);
exports.timestamp = timestamp;
function present(value) {
  return value != null && ("" + value).length > 0;
}
async function sign_request(apiConfig, params, options = {}) {
  let apiKey = apiConfig.apiKey;
  let apiSecret = apiConfig.apiSecret;
  params = clear_blank(params);
  params.signature = await api_sign_request(params, apiSecret);
  params.api_key = apiKey;
  return params;
}
async function api_sign_request(params_to_sign, api_secret) {
  let to_sign = entries(params_to_sign).filter(([k, v]) => present(v)).map(([k, v]) => `${k}=${toArray(v).join(",")}`).sort().join("&");
  const signature = computeHash(to_sign + api_secret, /*APIConfig().signature_algorithm || */_consts.DEFAULT_SIGNATURE_ALGORITHM, 'hex');
  return Promise.resolve(signature);
}
function clear_blank(hash) {
  let filtered_hash = {};
  entries(hash).filter(([k, v]) => present(v)).forEach(([k, v]) => {
    filtered_hash[k] = v.filter ? v.filter(x => x) : v;
  });
  return filtered_hash;
}

/**
* Computes hash from input string using specified algorithm.
* @private
* @param {string} input string which to compute hash from
* @param {string} signature_algorithm algorithm to use for computing hash
* @param {string} encoding type of encoding
* @return {string} computed hash value
*/
async function computeHash(input, signature_algorithm, encoding) {
  let hash;
  if (signature_algorithm === 'sha256') {
    const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, input);
    hash = digest;
  } else if (signature_algorithm === 'sha1') {
    const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, input);
    hash = digest;
  }
  return hash;
}
async function process_request_params(apiConfig, options) {
  let params = clear_blank(options);
  if (options.unsigned != null && options.unsigned) {
    params = clear_blank(options);
    //   delete params.timestamp;
    // } else if (options.oauth_token || config().oauth_token) {
    //   params = clear_blank(params);
  } else if (options.signature) {
    params = clear_blank(options);
  } else {
    params.timestamp = timestamp();
    params = await sign_request(apiConfig, params, options);
  }
  return Promise.resolve(params);
}
function hashToParameters(hash) {
  return entries(hash).reduce((parameters, [key, value]) => {
    if ((0, _util.isArray)(value)) {
      key = key.endsWith('[]') ? key : key + '[]';
      const items = value.map(v => [key, v]);
      parameters = parameters.concat(items);
    } else {
      parameters.push([key, value]);
    }
    return parameters;
  }, []);
}
//# sourceMappingURL=index.js.map