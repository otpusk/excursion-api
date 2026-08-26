import fetchJsonp from 'fetch-jsonp';

/**
 * Convert object to ulr query string
 *
 * @param {Object} params query object
 *
 * @returns {string} query stirng
 */
function createQueryStringFromObject(params) {
  const convertScalar = (query, _ref) => {
    let [k, v] = _ref;
    return [...query, `${k}=${encodeURIComponent(v)}`];
  };
  const convertArray = (query, _ref2) => {
    let [k, v] = _ref2;
    return [...query, ...v.map(entry => `${k}[]=${encodeURIComponent(entry)}`)];
  };
  const convertObject = (query, _ref3) => {
    let [key, value] = _ref3;
    let nextQuery = query;
    for (const [sk, sv] of Object.entries(value)) {
      nextQuery = getConverter(sv)(nextQuery, [`${key}[${sk}]`, sv]);
    }
    return nextQuery;
  };
  const getConverter = v => {
    return typeof v !== 'object' ? convertScalar : Array.isArray(v) ? convertArray : convertObject;
  };
  const convertParam = (query, _ref4) => {
    let [key, value] = _ref4;
    return getConverter(value)(query, [key, value]);
  };
  return Object.entries(params).reduce(convertParam, []).join('&');
}
async function call(endpoint) {
  let {
    query = {},
    body = null,
    jsonp = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const request = `${endpoint}?${createQueryStringFromObject(query)}`;
  const fetchfn = jsonp ? fetchJsonp : fetch;
  const response = await fetchfn(request, {
    method: body ? 'POST' : 'GET',
    body
  });
  if (response.status >= 300) {
    throw new Error(`Error while performing request ${endpoint}`);
  }
  const data = await response.json();
  return data;
}
export { call };