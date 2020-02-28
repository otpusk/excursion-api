"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;

function escapeHtml(unsafe) {
  var unsafeCharacters = [{
    "char": '\r\n',
    unicode: '&lt;br&gt;'
  }, {
    "char": '\n',
    unicode: '&lt;br&gt;'
  }, {
    "char": '&',
    unicode: '&amp;'
  }, {
    "char": '<',
    unicode: '&lt;'
  }, {
    "char": '>',
    unicode: '&gt;'
  }, {
    "char": '\"',
    unicode: '&quot;'
  }, {
    "char": "\'",
    unicode: '&#039;'
  }, {
    "char": '«',
    unicode: '&#171;'
  }, {
    "char": '»',
    unicode: '&#187;'
  }];
  return unsafeCharacters.reduce(function (acc, _ref) {
    var _char = _ref["char"],
        unicode = _ref.unicode;
    return acc.replace(new RegExp(_char, 'g'), unicode);
  }, unsafe);
}