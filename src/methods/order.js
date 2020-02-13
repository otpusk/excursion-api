import { endpoints } from '../config';
import { call } from '../fn';

export async function sendExcursionOrder (order) {
    const response = await call(endpoints.sendExcursionOrder, { body: order, jsonp: true });

    return response;
}
