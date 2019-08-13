"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Convert object to ulr query string
 *
 * @param {Object} params query object
 *
 * @returns {string} query stirng
 */
function createQueryStringFromObject(params) {
  return Object.entries(params).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return "".concat(k, "=").concat(encodeURIComponent(v));
  }).join('&');
}

function call(_x) {
  return _call.apply(this, arguments);
}

function _call() {
  _call = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(endpoint) {
    var _ref3,
        _ref3$query,
        query,
        _ref3$body,
        body,
        request,
        response,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref3 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref3$query = _ref3.query, query = _ref3$query === void 0 ? {} : _ref3$query, _ref3$body = _ref3.body, body = _ref3$body === void 0 ? null : _ref3$body;
            request = "".concat(endpoint, "?").concat(createQueryStringFromObject(query));
            _context.next = 4;
            return (0, _isomorphicFetch["default"])(request, {
              method: body ? 'POST' : 'GET',
              body: body
            });

          case 4:
            response = _context.sent;

            if (!(response.status >= 300)) {
              _context.next = 7;
              break;
            }

            throw new Error("Error while performing request ".concat(endpoint));

          case 7:
            _context.next = 9;
            return response.json();

          case 9:
            return _context.abrupt("return", _context.sent);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _call.apply(this, arguments);
}