import { endpoints } from '../config';
import { call } from '../fn';

export async function getMainpage() {
    const data = await call(endpoints.mainpage);

    return data;
}