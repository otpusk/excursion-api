"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgencies = getAgencies;
exports.getDistricts = getDistricts;

var _config = require("../config");

var _fn = require("../fn");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAgencies(_x) {
  return _getAgencies.apply(this, arguments);
}

function _getAgencies() {
  _getAgencies = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var token, params, rawData, offices, regions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _ref.token, params = _ref.params;
            _context.next = 3;
            return (0, _fn.call)(_config.endpoints.getAgencies, {
              query: _objectSpread({}, params, {
                'access_token': token
              }),
              jsonp: true
            });

          case 3:
            rawData = _context.sent;
            offices = // take all operators
            Object.values(rawData.operators) // return list of all agencies from viewAgencies and clickAgencies
            .flatMap(function (operator) {
              return [].concat(_toConsumableArray(Object.values(operator.viewAgencies)), _toConsumableArray(Object.values(operator.clickAgencies)));
            }) // return list of all offices
            .flatMap(function (agency) {
              // get title and url from agency
              var _agency$title = agency.title,
                  title = _agency$title === void 0 ? null : _agency$title,
                  _agency$url = agency.url,
                  url = _agency$url === void 0 ? null : _agency$url; // return array of offices with proper normalizing

              return Object.values(agency.offices).map(function (office) {
                var _office$rn = office.rn,
                    district = _office$rn === void 0 ? null : _office$rn,
                    _office$address = office.address,
                    address = _office$address === void 0 ? null : _office$address,
                    lat = office.lat,
                    lng = office.lng,
                    _office$facade = office.facade,
                    facade = _office$facade === void 0 ? null : _office$facade,
                    _office$workingTime = office.workingTime,
                    workingTime = _office$workingTime === void 0 ? null : _office$workingTime;
                var rawContacts = [{
                  phone: office.fPhone1,
                  hasViber: office.phoneViber1 || false
                }, {
                  phone: office.fPhone2,
                  hasViber: office.phoneViber2 || false
                }, {
                  phone: office.fPhone3,
                  hasViber: office.phoneViber3 || false
                }];
                var contacts = rawContacts.filter(function (contact) {
                  return Boolean(contact.phone);
                }).map(function (contact) {
                  return {
                    phone: contact.phone.replace(/[-() &nbsp;]/g, ''),
                    hasViber: contact.hasViber
                  };
                });
                return {
                  title: title,
                  url: url,
                  district: district,
                  address: address,
                  contacts: contacts,
                  lat: Number(lat),
                  lng: Number(lng),
                  facade: facade,
                  workingTime: workingTime
                };
              });
            });
            regions = rawData.regions;
            return _context.abrupt("return", {
              offices: offices,
              regions: regions
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAgencies.apply(this, arguments);
}

function getDistricts(_x2) {
  return _getDistricts.apply(this, arguments);
}

function _getDistricts() {
  _getDistricts = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref2) {
    var token, placeId, response, districts;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = _ref2.token, placeId = _ref2.placeId;
            _context2.next = 3;
            return (0, _fn.call)(_config.endpoints.getDistricts, {
              query: {
                placeId: placeId,
                'access_token': token
              },
              jsonp: true
            });

          case 3:
            response = _context2.sent;
            districts = response.regions;
            return _context2.abrupt("return", districts);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDistricts.apply(this, arguments);
}