import { endpoints } from '../config';
import { call } from '../fn';

export async function getSuggest (word = '') {
    const data = await call(endpoints.suggest, { query: { word }});

    return data;
}

export async function getLocationsInfo ({ countries = [], cities = [], sights = []}) {
    // locations - { countries: string[], cities: string[], sights: string[] }
    const data = await call(endpoints.getLocationsInfo, { body: true, query: { countries, cities, sights }});

    return data;
}
