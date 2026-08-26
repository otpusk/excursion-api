"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilterDeparture = getFilterDeparture;
exports.getFilterTransport = getFilterTransport;
exports.getFilterCategories = getFilterCategories;
exports.getFilterPrice = getFilterPrice;
exports.getFilterOperators = getFilterOperators;
var _config = require("../config");
var _fn = require("../fn");
async function getFilterDeparture(query) {
  const cities = await (0, _fn.call)(_config.endpoints.filterDeparture, {
    query
  });
  return cities;
}
async function getFilterTransport(query) {
  const transport = await (0, _fn.call)(_config.endpoints.filterTransport, {
    query
  });
  return transport;
}
async function getFilterCategories(query) {
  const categories = await (0, _fn.call)(_config.endpoints.filterCategories, {
    query
  });
  return categories;
}
async function getFilterPrice(query) {
  const prices = await (0, _fn.call)(_config.endpoints.filterPrice, {
    query
  });
  return prices;
}
async function getFilterOperators(query) {
  const operators = await (0, _fn.call)(_config.endpoints.filterOperators, {
    query
  });
  return operators;
}