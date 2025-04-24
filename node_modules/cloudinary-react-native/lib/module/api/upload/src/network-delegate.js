import "isomorphic-fetch";
async function callApi(request) {
  try {
    const response = await fetch(request.url, {
      method: 'POST',
      headers: request.headers,
      body: request.data
    });
    const jsonResponse = await response.json();
    return Promise.resolve(jsonResponse);
  } catch (error) {
    return Promise.resolve(error);
  }
}
export { callApi };
//# sourceMappingURL=network-delegate.js.map