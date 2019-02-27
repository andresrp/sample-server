"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _main = require("../classes/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var router = _express2.default.Router();
// var express = require('express');

console.log("Index file!");
/* GET home page. */
router.get('/', function(req, res, next) {

  var sample = new _main2.default();
  // res.send(500, "Error selected!");

  res.render('index', {
    title: "Index",
    text: 'Index Sample Page with data parameter: <code>' + sample.getParam() + '</code>',
    data: sample
  });
});

module.exports = router;