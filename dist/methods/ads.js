"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgencies = getAgencies;

var _config = require("../config");

var _fn = require("../fn");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAgencies(_x, _x2) {
  return _getAgencies.apply(this, arguments);
}

function _getAgencies() {
  _getAgencies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, token) {
    var rawData, offices, regions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)(_config.endpoints.getAgencies, {
              query: _objectSpread(_objectSpread({}, query), token)
            });

          case 2:
            rawData = _context.sent;
            offices = rawData && rawData.operators ? // take all operators
            Object.values(rawData.operators).flatMap(function (operator) {
              return Object.values(operator.viewAgencies);
            }) // return list of all offices
            .flatMap(function (agency) {
              // get title and url from agency
              var _agency$title = agency.title,
                  title = _agency$title === void 0 ? null : _agency$title,
                  _agency$url = agency.url,
                  url = _agency$url === void 0 ? null : _agency$url,
                  _agency$advertId = agency.advertId,
                  advertId = _agency$advertId === void 0 ? null : _agency$advertId,
                  _agency$agencyId = agency.agencyId,
                  agencyId = _agency$agencyId === void 0 ? null : _agency$agencyId,
                  _agency$logoBigFile = agency.logoBigFile,
                  agencyLogo = _agency$logoBigFile === void 0 ? null : _agency$logoBigFile; // return array of offices with proper normalizing

              return Object.values(agency.offices).map(function (office) {
                var _office$rn = office.rn,
                    district = _office$rn === void 0 ? null : _office$rn,
                    _office$address = office.address,
                    address = _office$address === void 0 ? null : _office$address,
                    lat = office.lat,
                    lng = office.lng,
                    _office$image = office.image,
                    facade = _office$image === void 0 ? null : _office$image,
                    _office$workingTime = office.workingTime,
                    workingTime = _office$workingTime === void 0 ? null : _office$workingTime,
                    _office$zoom = office.zoom,
                    zoom = _office$zoom === void 0 ? null : _office$zoom,
                    officeId = office.officeId,
                    _office$city = office.city,
                    city = _office$city === void 0 ? null : _office$city;
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
                  officeId: Number(officeId),
                  advertId: Number(advertId),
                  agencyId: Number(agencyId),
                  district: district,
                  address: address,
                  contacts: contacts,
                  lat: Number(lat),
                  lng: Number(lng),
                  zoom: Number(zoom),
                  facade: facade,
                  workingTime: workingTime,
                  city: Number(city),
                  agencyLogo: "https://www.otpusk.com/logos/".concat(agencyLogo)
                };
              });
            }) : [];
            regions = rawData && rawData.regions ? rawData.regions.reduce(function (store, region) {
              store[region.regionId] = region;
              return store;
            }, {}) : {};
            return _context.abrupt("return", {
              offices: offices,
              regions: regions
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAgencies.apply(this, arguments);
}