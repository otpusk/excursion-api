import { endpoints } from '../config';
import { call } from '../fn';
export async function getCountries(query) {
  const data = await call(endpoints.countries, {
    query
  });
  return data;
}