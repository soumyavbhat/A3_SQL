var express = require('express');
var router = express.Router();

var config = require('../config');

// check here, check the default user
// ? shorthand for if else
var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, { title: 'Handlebars ' , message : "They are awesome", mainpage: true, kidsmode: config.kidsmode});
});

module.exports = router;
