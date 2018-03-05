var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {home:true, cms:false, title: 'Handlebars ' , message : "They are awesome"});
});

router.get('/cms', (req, res) => {
  console.log("hit cms");
  res.render('cmsForm', {cms : true, home:false});
});

module.exports = router;
