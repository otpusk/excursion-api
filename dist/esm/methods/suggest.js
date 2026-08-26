import { endpoints } from '../config';
import { call } from '../fn';
export async function getSuggest(query) {
  const data = await call(endpoints.suggest, {
    query
  });
  return data;
}
export async function getLocationsInfo(query) {
  // locations - { countries: string[], cities: string[], sights: string[] }
  const data = await call(endpoints.getLocationsInfo, {
    body: true,
    query
  });
  return data;
}