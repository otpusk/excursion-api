"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearch = getSearch;
var _config = require("../config");
var _fn = require("../fn");
async function getSearch(query) {
  const tours = await (0, _fn.call)(_config.endpoints.search, {
    query
  });
  return tours;
}