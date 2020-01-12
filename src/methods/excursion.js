import { endpoints } from '../config';
import { call } from '../fn';

export async function getExcursion (excursion) {
    const data = await call(`${endpoints.getExcursion}/${excursion}`);

    return data;
}
