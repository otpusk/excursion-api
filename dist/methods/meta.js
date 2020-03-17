"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryMeta = getCountryMeta;
exports.getCityMeta = getCityMeta;
exports.getShowplaceMeta = getShowplaceMeta;
exports.getExcursionMeta = getExcursionMeta;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCountryMeta(_x) {
  return _getCountryMeta.apply(this, arguments);
}

function _getCountryMeta() {
  _getCountryMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(countryAlias) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.countryMeta, "/").concat(countryAlias));

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
  return _getCountryMeta.apply(this, arguments);
}

function getCityMeta(_x2, _x3) {
  return _getCityMeta.apply(this, arguments);
}

function _getCityMeta() {
  _getCityMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(countryAlias, cityAlias) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.cityMeta, "/").concat(countryAlias, "/").concat(cityAlias));

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
  return _getCityMeta.apply(this, arguments);
}

function getShowplaceMeta(_x4) {
  return _getShowplaceMeta.apply(this, arguments);
}

function _getShowplaceMeta() {
  _getShowplaceMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(showplaceId) {
    var data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _fn.call)(_config.endpoints.showplaceMeta, {
              query: {
                showplaceId: showplaceId
              }
            });

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getShowplaceMeta.apply(this, arguments);
}

function getExcursionMeta(_x5) {
  return _getExcursionMeta.apply(this, arguments);
}

function _getExcursionMeta() {
  _getExcursionMeta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(excursionId) {
    var data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.excursionMeta, "/").concat(excursionId));

          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getExcursionMeta.apply(this, arguments);
}