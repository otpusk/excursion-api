"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggest = getSuggest;
exports.getLocationsInfo = getLocationsInfo;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSuggest() {
  return _getSuggest.apply(this, arguments);
}

function _getSuggest() {
  _getSuggest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var word,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            word = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            _context.next = 3;
            return (0, _fn.call)(_config.endpoints.suggest, {
              query: {
                word: word
              }
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSuggest.apply(this, arguments);
}

function getLocationsInfo(_x) {
  return _getLocationsInfo.apply(this, arguments);
}

function _getLocationsInfo() {
  _getLocationsInfo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref) {
    var _ref$countries, countries, _ref$cities, cities, _ref$sights, sights, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref$countries = _ref.countries, countries = _ref$countries === void 0 ? [] : _ref$countries, _ref$cities = _ref.cities, cities = _ref$cities === void 0 ? [] : _ref$cities, _ref$sights = _ref.sights, sights = _ref$sights === void 0 ? [] : _ref$sights;
            _context2.next = 3;
            return (0, _fn.call)(_config.endpoints.getLocationsInfo, {
              body: true,
              query: {
                countries: countries,
                cities: cities,
                sights: sights
              }
            });

          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLocationsInfo.apply(this, arguments);
}