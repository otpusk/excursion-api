"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendExcursionOrder = sendExcursionOrder;
var _config = require("../config");
var _fn = require("../fn");
async function sendExcursionOrder(order) {
  const response = await (0, _fn.call)(_config.endpoints.sendExcursionOrder, {
    body: order
  });
  return response;
}