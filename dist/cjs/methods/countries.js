"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountries = getCountries;
var _config = require("../config");
var _fn = require("../fn");
async function getCountries(query) {
  const data = await (0, _fn.call)(_config.endpoints.countries, {
    query
  });
  return data;
}