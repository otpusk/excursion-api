"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.parseExcursions = parseExcursions;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function escapeHtml(unsafe) {
  var unsafeCharacters = [{
    "char": "\r\n",
    unicode: "<br />"
  }, {
    "char": "\n",
    unicode: "<br />"
  }, {
    "char": "&",
    unicode: "&amp;"
  }, {
    "char": '"',
    unicode: "&quot;"
  }, {
    "char": "'",
    unicode: "&#039;"
  }, {
    "char": "«",
    unicode: "&#171;"
  }, {
    "char": "»",
    unicode: "&#187;"
  }];
  return unsafeCharacters.reduce(function (acc, _ref) {
    var _char = _ref["char"],
        unicode = _ref.unicode;
    return acc.replace(new RegExp(_char, "g"), unicode);
  }, unsafe);
}

function parseExcursions(excursions) {
  return excursions.map(function (excursion) {
    var _excursion$excursionC = excursion.excursionCategories,
        excursionCategories = _excursion$excursionC === void 0 ? [] : _excursion$excursionC,
        _excursion$excursionD = excursion.excursionDestinations,
        excursionDestinations = _excursion$excursionD === void 0 ? [] : _excursion$excursionD,
        _excursion$prices = excursion.prices;
    _excursion$prices = _excursion$prices === void 0 ? {} : _excursion$prices;
    var _excursion$prices$uah = _excursion$prices.uah,
        price = _excursion$prices$uah === void 0 ? null : _excursion$prices$uah,
        _excursion$images = excursion.images,
        images = _excursion$images === void 0 ? [] : _excursion$images,
        _excursion$title = excursion.title,
        title = _excursion$title === void 0 ? "" : _excursion$title,
        _excursion$titleTrans = excursion.titleTranslit,
        titleTranslit = _excursion$titleTrans === void 0 ? "" : _excursion$titleTrans,
        _excursion$id = excursion.id,
        id = _excursion$id === void 0 ? "" : _excursion$id,
        _excursion$length = excursion.length,
        length = _excursion$length === void 0 ? null : _excursion$length,
        _excursion$departureC = excursion.departureCity;
    _excursion$departureC = _excursion$departureC === void 0 ? {} : _excursion$departureC;
    var _excursion$departureC2 = _excursion$departureC.nameInGenitiveCase,
        departureCity = _excursion$departureC2 === void 0 ? '' : _excursion$departureC2;
    var coverPhoto = null;

    var _excursionCategories$ = excursionCategories.filter(function (_ref2) {
      var priority = _ref2.priority;
      return priority > 0;
    }).sort(function (_ref3, _ref4) {
      var a = _ref3.priority;
      var b = _ref4.priority;
      return a - b;
    }).map(function (category) {
      var _category$name = category.name,
          name = _category$name === void 0 ? "" : _category$name,
          _category$showOptions = category.showOptions;
      _category$showOptions = _category$showOptions === void 0 ? {} : _category$showOptions;
      var _category$showOptions2 = _category$showOptions.iconSmall,
          icon = _category$showOptions2 === void 0 ? null : _category$showOptions2;
      return {
        name: name,
        icon: icon
      };
    }),
        _excursionCategories$2 = _slicedToArray(_excursionCategories$, 1),
        mainCategory = _excursionCategories$2[0];

    var destinations = _toConsumableArray(new Set(excursionDestinations.sort(function (_ref5, _ref6) {
      var _ref5$city$priority = _ref5.city.priority,
          p1 = _ref5$city$priority === void 0 ? 0 : _ref5$city$priority;
      var _ref6$city$priority = _ref6.city.priority,
          p2 = _ref6$city$priority === void 0 ? 0 : _ref6$city$priority;
      return p2 - p1;
    }).map(function (_ref7) {
      var city = _ref7.city;
      return city.name;
    })));

    if (images && images.length && images[0].thumbs) {
      var appropriatePhoto = images[0].thumbs.find(function (ph) {
        return ph.format.endsWith("desktop_card");
      });

      if (appropriatePhoto && appropriatePhoto.url) {
        coverPhoto = appropriatePhoto.url;
      }
    }

    return {
      coverPhoto: coverPhoto,
      title: title,
      titleTranslit: titleTranslit,
      excursionId: id,
      length: length,
      price: price,
      destinations: destinations,
      mainCategory: mainCategory,
      departureCity: departureCity
    };
  });
}