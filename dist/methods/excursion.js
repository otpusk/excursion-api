"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExcursion = getExcursion;

var _config = require("../config");

var _fn = require("../fn");

var _helpers = require("../helpers");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getExcursion(_x) {
  return _getExcursion.apply(this, arguments);
}

function _getExcursion() {
  _getExcursion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(excursion) {
    var tour, sanitizeStringProperties;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.getExcursion, "/").concat(excursion));

          case 2:
            tour = _context.sent;

            // escaping unsafe characters in html response
            sanitizeStringProperties = function sanitizeStringProperties(obj) {
              Object.keys(obj).forEach(function (key) {
                if (!obj[key]) {
                  return;
                }

                if (typeof obj[key] === 'string') {
                  obj[key] = (0, _helpers.escapeHtml)(obj[key]);
                }

                if (_typeof(obj[key]) === 'object') {
                  sanitizeStringProperties(obj[key]);
                }
              });
              return obj;
            };

            return _context.abrupt("return", sanitizeStringProperties(tour));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getExcursion.apply(this, arguments);
}