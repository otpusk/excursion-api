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
