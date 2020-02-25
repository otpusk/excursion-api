import { endpoints } from '../config';
import { call } from '../fn';

export async function getCountry (alias) {
    const data = await call(`${endpoints.getCountry}/${alias}`);

    return data;
}

export async function getCity (countryAlias, cityAlias) {
    const data = await call(`${endpoints.getCity}/${countryAlias}/${cityAlias}`);

    return data;
}

export async function getShowplace ({ country, city, showplace }) {
    const data = await call(endpoints.getShowplace, { body: true, query: { country, city, showplace }});

    return data;
}
