"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.parseExcursions = parseExcursions;
function escapeHtml(unsafe) {
  const unsafeCharacters = [{
    char: "\r\n",
    unicode: "<br />"
  }, {
    char: "\n",
    unicode: "<br />"
  }, {
    char: "\\\\",
    unicode: ''
  }, {
    char: "&",
    unicode: "&amp;"
  }, {
    char: '"',
    unicode: "&quot;"
  }, {
    char: '“',
    unicode: "&quot;"
  }, {
    char: '”',
    unicode: "&quot;"
  }, {
    char: "'",
    unicode: "&#039;"
  }, {
    char: "«",
    unicode: "&#171;"
  }, {
    char: "»",
    unicode: "&#187;"
  }, {
    char: '„',
    unicode: "&quot;"
  }, {
    char: '	',
    unicode: ' '
  }];
  return unsafeCharacters.reduce((acc, _ref) => {
    let {
      char,
      unicode
    } = _ref;
    return acc.replace(new RegExp(char, "g"), unicode);
  }, unsafe);
}
function parseExcursions(excursions) {
  if (excursions && Array.isArray(excursions)) {
    return excursions.map(excursion => {
      const {
        excursionCategories = [],
        excursionDestinations = [],
        prices = {},
        images = [],
        title = "",
        titleTranslit = "",
        id = "",
        length = null,
        departureCity,
        transport = null
      } = excursion;
      let coverPhoto = null;
      const [mainCategory] = excursionCategories.filter(_ref2 => {
        let {
          priority
        } = _ref2;
        return priority > 0;
      }).sort((_ref3, _ref4) => {
        let {
          priority: a
        } = _ref3;
        let {
          priority: b
        } = _ref4;
        return a - b;
      }).map(category => {
        const {
          name = "",
          showOptions: {
            iconSmall: icon = null
          } = {}
        } = category;
        return {
          name,
          icon
        };
      });
      const destinations = [...new Set(excursionDestinations.sort((_ref5, _ref6) => {
        let {
          city: {
            priority: p1 = 0
          }
        } = _ref5;
        let {
          city: {
            priority: p2 = 0
          }
        } = _ref6;
        return p2 - p1;
      }).map(_ref7 => {
        let {
          city
        } = _ref7;
        return city.name;
      }))];
      if (images && images.length && images[0].thumbs) {
        const appropriatePhoto = images[0].thumbs.find(ph => ph.format.endsWith("desktop_card"));
        if (appropriatePhoto && appropriatePhoto.url) {
          coverPhoto = appropriatePhoto.url;
        }
      }
      return {
        coverPhoto,
        title,
        titleTranslit,
        excursionId: id,
        length,
        prices,
        destinations,
        mainCategory,
        departureCity: departureCity ? departureCity.nameInGenitiveCase : '',
        transport
      };
    });
  }
  return [];
}