"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var host = _jsCookie["default"].get('excursion-api-host') || 'https://new.otpusk.com/api';
var exportOtpusk = 'https://export.otpusk.com/api';
var otpusk = 'https://www.otpusk.com';
var endpoints = Object.freeze({
  mainpage: "".concat(host, "/excursions/mainpage"),
  countries: "".concat(host, "/excursions/countries"),
  suggest: "".concat(host, "/excursions/suggest"),
  filterDeparture: "".concat(host, "/excursions/filter/departure"),
  filterTransport: "".concat(host, "/excursions/filter/transport"),
  filterCategories: "".concat(host, "/excursions/filter/categories"),
  filterPrice: "".concat(host, "/excursions/filter/price"),
  filterOperators: "".concat(host, "/excursions/filter/operators"),
  search: "".concat(host, "/excursions/search"),
  searchCount: "".concat(host, "/excursions/searchcount"),
  getExcursion: "".concat(host, "/excursions/get_excursion"),
  getCountry: "".concat(host, "/geo/country"),
  getCity: "".concat(host, "/geo/city"),
  getCategory: "".concat(host, "/excursions/category"),
  getLocationsInfo: "".concat(host, "/excursions/locations_info"),
  getAgencies: "".concat(otpusk, "/excursions/agency"),
  sendExcursionOrder: "".concat(otpusk, "/tour/order")
});
exports.endpoints = endpoints;