"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var host = _jsCookie["default"].get('excursion-api-host') || 'https://new.otpusk.com/api';
var endpoints = Object.freeze({
  mainpage: "".concat(host, "/excursions/mainpage"),
  countries: "".concat(host, "/excursions/countries"),
  suggest: "".concat(host, "/excursions/suggest"),
  filterDeparture: "".concat(host, "/excursions/filter/departure"),
  filterTransport: "".concat(host, "/excursions/filter/transport"),
  filterCategories: "".concat(host, "/excursions/filter/categories"),
  filterPrice: "".concat(host, "/excursions/filter/price"),
  filterOperators: "".concat(host, "/excursions/filter/operators"),
  search: "".concat(host, "/excursions/search")
});
exports.endpoints = endpoints;