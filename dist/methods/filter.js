"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilterDeparture = getFilterDeparture;
exports.getFilterTransport = getFilterTransport;
exports.getFilterCategories = getFilterCategories;
exports.getFilterPrice = getFilterPrice;
exports.getFilterOperators = getFilterOperators;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getFilterDeparture() {
  return _getFilterDeparture.apply(this, arguments);
}

function _getFilterDeparture() {
  _getFilterDeparture = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var cities;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)(_config.endpoints.filterDeparture);

          case 2:
            cities = _context.sent;
            return _context.abrupt("return", cities);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFilterDeparture.apply(this, arguments);
}

function getFilterTransport() {
  return _getFilterTransport.apply(this, arguments);
}

function _getFilterTransport() {
  _getFilterTransport = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var transport;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fn.call)(_config.endpoints.filterTransport);

          case 2:
            transport = _context2.sent;
            return _context2.abrupt("return", transport);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFilterTransport.apply(this, arguments);
}

function getFilterCategories() {
  return _getFilterCategories.apply(this, arguments);
}

function _getFilterCategories() {
  _getFilterCategories = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var categories;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _fn.call)(_config.endpoints.filterCategories);

          case 2:
            categories = _context3.sent;
            return _context3.abrupt("return", categories);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getFilterCategories.apply(this, arguments);
}

function getFilterPrice() {
  return _getFilterPrice.apply(this, arguments);
}

function _getFilterPrice() {
  _getFilterPrice = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var prices;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _fn.call)(_config.endpoints.filterPrice);

          case 2:
            prices = _context4.sent;
            return _context4.abrupt("return", prices);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getFilterPrice.apply(this, arguments);
}

function getFilterOperators() {
  return _getFilterOperators.apply(this, arguments);
}

function _getFilterOperators() {
  _getFilterOperators = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var operators;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _fn.call)(_config.endpoints.filterOperators);

          case 2:
            operators = _context5.sent;
            return _context5.abrupt("return", operators);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getFilterOperators.apply(this, arguments);
}