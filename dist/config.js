"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = void 0;
var host = '/api';
var endpoints = Object.freeze({
  mainpage: "".concat(host, "/excursions/mainpage"),
  countries: "".concat(host, "/excursions/countries")
});
exports.endpoints = endpoints;