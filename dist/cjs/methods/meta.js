"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryMeta = getCountryMeta;
exports.getCityMeta = getCityMeta;
exports.getExcursionMeta = getExcursionMeta;
exports.getTransportExcursionMeta = getTransportExcursionMeta;
var _config = require("../config");
var _fn = require("../fn");
async function getCountryMeta(countryAlias) {
  const data = await (0, _fn.call)(`${_config.endpoints.countryMeta}/${countryAlias}`);
  return data;
}
async function getCityMeta(countryAlias, cityAlias) {
  const data = await (0, _fn.call)(`${_config.endpoints.cityMeta}/${countryAlias}/${cityAlias}`);
  return data;
}
async function getExcursionMeta(excursionId, query) {
  const data = await (0, _fn.call)(`${_config.endpoints.excursionMeta}/${excursionId}`, {
    query
  });
  return data;
}
async function getTransportExcursionMeta(params) {
  const data = await (0, _fn.call)(_config.endpoints.transportExcursionMeta, {
    query: params
  });
  return data;
}