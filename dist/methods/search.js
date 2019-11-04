"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearch = getSearch;
exports.getSearchCount = getSearchCount;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getSearch(_x) {
  return _getSearch.apply(this, arguments);
}

function _getSearch() {
  _getSearch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(query) {
    var tours;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)(_config.endpoints.search, {
              query: query
            });

          case 2:
            tours = _context.sent;
            return _context.abrupt("return", tours);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSearch.apply(this, arguments);
}

function getSearchCount(_x2) {
  return _getSearchCount.apply(this, arguments);
}

function _getSearchCount() {
  _getSearchCount = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(query) {
    var searchCount;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fn.call)(_config.endpoints.searchCount, {
              query: query
            });

          case 2:
            searchCount = _context2.sent;
            return _context2.abrupt("return", searchCount);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getSearchCount.apply(this, arguments);
}