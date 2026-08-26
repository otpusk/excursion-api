"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainpage = getMainpage;
var _config = require("../config");
var _fn = require("../fn");
var _helpers = require("../helpers");
async function getMainpage(query) {
  const data = await (0, _fn.call)(_config.endpoints.mainpage, {
    query
  });
  return data.map(section => {
    const sectionType = section.showOptions.sqType;
    if (sectionType === 'excursion_1' || sectionType === 'excursion_2') {
      section.mainPageExcursions = (0, _helpers.parseExcursions)(section.mainPageExcursions);
    }
    return section;
  });
}