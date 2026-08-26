"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggest = getSuggest;
exports.getLocationsInfo = getLocationsInfo;
var _config = require("../config");
var _fn = require("../fn");
async function getSuggest(query) {
  const data = await (0, _fn.call)(_config.endpoints.suggest, {
    query
  });
  return data;
}
async function getLocationsInfo(query) {
  // locations - { countries: string[], cities: string[], sights: string[] }
  const data = await (0, _fn.call)(_config.endpoints.getLocationsInfo, {
    body: true,
    query
  });
  return data;
}