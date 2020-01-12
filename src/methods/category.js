import { endpoints } from '../config';
import { call } from '../fn';

export async function getCategory (alias) {
    const data = await call(`${endpoints.getCategory}/${alias}`);

    return data;
}

