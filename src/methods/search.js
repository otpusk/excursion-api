import { endpoints } from '../config';
import { call } from '../fn';

export async function getSearch (query) {
    const [rawtours] = await call(endpoints.search, { query });
    const tours = rawtours.map((tour) => Object.values(tour)[0]);

    return tours;
}
