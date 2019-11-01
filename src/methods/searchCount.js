import { endpoints } from '../config';
import { call } from '../fn';

export async function getSearchCount (query) {
    const searchCount = await call(endpoints.searchCount, { query });

    return searchCount;
}
