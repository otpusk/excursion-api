"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = void 0;
var host = 'https://new.otpusk.com/api';
var endpoints = Object.freeze({
  mainpage: "".concat(host, "/excursions/mainpage"),
  countries: "".concat(host, "/excursions/countries"),
  suggest: "".concat(host, "/excursions/suggest"),
  filterDeparture: "".concat(host, "/excursions/filter/departure")
});
exports.endpoints = endpoints;