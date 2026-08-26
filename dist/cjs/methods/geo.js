"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountry = getCountry;
exports.getCity = getCity;
exports.getShowplace = getShowplace;
var _config = require("../config");
var _fn = require("../fn");
async function getCountry(alias, query) {
  const data = await (0, _fn.call)(`${_config.endpoints.getCountry}/${alias}`, {
    query
  });
  return data;
}
async function getCity(countryAlias, cityAlias, query) {
  const data = await (0, _fn.call)(`${_config.endpoints.getCity}/${countryAlias}/${cityAlias}`, {
    query
  });
  return data;
}
async function getShowplace(query) {
  const data = await (0, _fn.call)(_config.endpoints.getShowplace, {
    body: true,
    query
  });
  return data;
}