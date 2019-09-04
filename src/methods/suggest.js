import { endpoints } from '../config';
import { call } from '../fn';

export async function getSuggest (word = '') {
    const data = await call(endpoints.suggest, { query: { word }});

    return data;
}
