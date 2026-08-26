import { endpoints } from '../config';
import { call } from '../fn';
export async function getFilterDeparture(query) {
  const cities = await call(endpoints.filterDeparture, {
    query
  });
  return cities;
}
export async function getFilterTransport(query) {
  const transport = await call(endpoints.filterTransport, {
    query
  });
  return transport;
}
export async function getFilterCategories(query) {
  const categories = await call(endpoints.filterCategories, {
    query
  });
  return categories;
}
export async function getFilterPrice(query) {
  const prices = await call(endpoints.filterPrice, {
    query
  });
  return prices;
}
export async function getFilterOperators(query) {
  const operators = await call(endpoints.filterOperators, {
    query
  });
  return operators;
}