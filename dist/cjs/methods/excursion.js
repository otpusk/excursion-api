"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExcursion = getExcursion;
var _config = require("../config");
var _fn = require("../fn");
var _helpers = require("../helpers");
async function getExcursion(excursion, query) {
  const tour = await (0, _fn.call)(`${_config.endpoints.getExcursion}/${excursion}`, {
    query
  });

  // escaping unsafe characters in html response
  const sanitizeStringProperties = obj => {
    Object.keys(obj).forEach(key => {
      if (!obj[key]) {
        return;
      }
      if (typeof obj[key] === 'string') {
        obj[key] = (0, _helpers.escapeHtml)(obj[key]);
      }
      if (typeof obj[key] === 'object') {
        sanitizeStringProperties(obj[key]);
      }
    });
    return obj;
  };
  return sanitizeStringProperties(tour);
}