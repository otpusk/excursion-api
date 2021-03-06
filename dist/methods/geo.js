"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountry = getCountry;
exports.getCity = getCity;
exports.getShowplace = getShowplace;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCountry(_x) {
  return _getCountry.apply(this, arguments);
}

function _getCountry() {
  _getCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(alias) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.getCountry, "/").concat(alias));

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCountry.apply(this, arguments);
}

function getCity(_x2, _x3) {
  return _getCity.apply(this, arguments);
}

function _getCity() {
  _getCity = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countryAlias, cityAlias) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.getCity, "/").concat(countryAlias, "/").concat(cityAlias));

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCity.apply(this, arguments);
}

function getShowplace(_x4) {
  return _getShowplace.apply(this, arguments);
}

function _getShowplace() {
  _getShowplace = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
    var country, city, showplace, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            country = _ref.country, city = _ref.city, showplace = _ref.showplace;
            _context3.next = 3;
            return (0, _fn.call)(_config.endpoints.getShowplace, {
              body: true,
              query: {
                country: country,
                city: city,
                showplace: showplace
              }
            });

          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getShowplace.apply(this, arguments);
}