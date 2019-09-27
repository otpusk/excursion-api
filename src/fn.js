import fetch from 'isomorphic-fetch';

/**
 * Convert object to ulr query string
 *
 * @param {Object} params query object
 *
 * @returns {string} query stirng
 */
function createQueryStringFromObject (params) {
    const convertScalar = (query, [k, v]) =>
        [...query, `${k}=${encodeURIComponent(v)}`];
    const convertArray = (query, [k, v]) => [
        ...query,
        ...v.map((entry) => `${k}[]=${encodeURIComponent(entry)}`)
    ];

    const convertObject = (query, [key, value]) => {
        let nextQuery = query;

        for (const [sk, sv] of Object.entries(value)) {
            nextQuery = getConverter(sv)(nextQuery, [`${key}[${sk}]`, sv]);
        }

        return nextQuery;
    };

    const getConverter = (v) => {
        return typeof v !== 'object'
            ? convertScalar
            : Array.isArray(v)
                ? convertArray
                : convertObject;
    };

    const convertParam = (query, [key, value]) => {
        return getConverter(value)(query, [key, value]);
    };


    return Object.entries(params)
        .reduce(convertParam, []);
}

async function call (endpoint, { query = {}, body = null } = {}) {
    const request = `${endpoint}?${createQueryStringFromObject(query)}`;
    const response = await fetch(request, {
        method: body ? 'POST' : 'GET',
        body,
    });

    console.log(createQueryStringFromObject(query));

    if (response.status >= 300) {
        throw new Error(`Error while performing request ${endpoint}`);
    }

    const data = await response.json();

    return data;
}

export { call };
