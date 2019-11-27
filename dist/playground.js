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
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = console;
            _context.next = 3;
            return (0, _index.getFilterDeparture)();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.t2 = console;
            _context.next = 8;
            return (0, _index.getFilterTransport)();

          case 8:
            _context.t3 = _context.sent;

            _context.t2.log.call(_context.t2, _context.t3);

            _context.t4 = console;
            _context.next = 13;
            return (0, _index.getFilterCategories)();

          case 13:
            _context.t5 = _context.sent;

            _context.t4.log.call(_context.t4, _context.t5);

            _context.t6 = console;
            _context.next = 18;
            return (0, _index.getFilterPrice)();

          case 18:
            _context.t7 = _context.sent;

            _context.t6.log.call(_context.t6, _context.t7);

            _context.t8 = console;
            _context.next = 23;
            return (0, _index.getFilterOperators)();

          case 23:
            _context.t9 = _context.sent;

            _context.t8.log.call(_context.t8, _context.t9);

            _context.t10 = console;
            _context.next = 28;
            return (0, _index.getSearchCount)({});

          case 28:
            _context.t11 = _context.sent;

            _context.t10.log.call(_context.t10, _context.t11);

            _context.t12 = console;
            _context.next = 33;
            return (0, _index.getExcursion)(68831);

          case 33:
            _context.t13 = _context.sent;

            _context.t12.log.call(_context.t12, _context.t13);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();