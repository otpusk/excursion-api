import { endpoints } from '../config';
import { call } from '../fn';

export async function getSearch (query) {
    const tours = await call(endpoints.search, { query });

    return tours;
}
