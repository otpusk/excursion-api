"use strict";

var _index = require("./index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var data, districts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _index.getAgencies)({
              token: '1b204-25f04-4b78c-0b089-e27ea',
              params: {
                cruiseId: 40671,
                date: '2019-12-28',
                operatorId: 465,
                variantId: 2022263105,
                cityFrom: '1',
                deptCity: '1397',
                hash: ''
              }
            });

          case 2:
            data = _context.sent;
            _context.next = 5;
            return (0, _index.getDistricts)({
              token: '1b204-25f04-4b78c-0b089-e27ea',
              placeId: 1
            });

          case 5:
            districts = _context.sent;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();