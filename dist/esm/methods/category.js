import { endpoints } from '../config';
import { call } from '../fn';
export async function getCategory(query) {
  const data = await call(endpoints.getCategory, {
    body: true,
    query
  });
  return data;
}