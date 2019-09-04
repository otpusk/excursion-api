import { endpoints } from '../config';
import { call } from '../fn';

export async function getFilterDeparture () {
    const data = await call(endpoints.filterDeparture);

    return data;
}
