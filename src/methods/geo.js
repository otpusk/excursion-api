import { endpoints } from '../config';
import { call } from '../fn';

export async function getCountry (alias, query) {
    const data = await call(`${endpoints.getCountry}/${alias}`, { query });

    return data;
}

export async function getCity (countryAlias, cityAlias, query) {
    const data = await call(`${endpoints.getCity}/${countryAlias}/${cityAlias}`, { query });

    return data;
}

export async function getShowplace (query) {
    const data = await call(endpoints.getShowplace, { body: true, query });

    return data;
}
