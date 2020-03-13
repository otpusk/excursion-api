import { endpoints } from '../config';
import { call } from '../fn';

export async function getCountryMeta (countryAlias) {
    const data = await call(`${endpoints.countryMeta}/${countryAlias}`);

    return data;
}

export async function getCityMeta (countryAlias, cityAlias) {
    const data = await call(`${endpoints.cityMeta}/${countryAlias}/${cityAlias}`);

    return data;
}

export async function getShowplaceMeta (showplaceId) {
    const data = await call(endpoints.showplaceMeta, { query: { showplaceId }});

    return data;
}

export async function getExcursionMeta (excursionId) {
    const data = await call(`${endpoints.excursionMeta}/${excursionId}`);

    return data;
}
