"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategory = getCategory;
var _config = require("../config");
var _fn = require("../fn");
async function getCategory(query) {
  const data = await (0, _fn.call)(_config.endpoints.getCategory, {
    body: true,
    query
  });
  return data;
}