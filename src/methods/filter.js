import { endpoints } from '../config';
import { call } from '../fn';

export async function getFilterDeparture () {
    const cities = await call(endpoints.filterDeparture);

    return cities;
}

export async function getFilterTransport () {
    const transport = await call(endpoints.filterTransport);

    return transport;
}

export async function getFilterCategories () {
    const categories = await call(endpoints.filterCategories);

    return categories;
}

export async function getFilterPrice () {
    const prices = await call(endpoints.filterPrice);

    return prices;
}

export async function getFilterOperators () {
    const operators = await call(endpoints.filterOperators);

    return operators;
}
