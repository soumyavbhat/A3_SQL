var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/getCars', (req, res) => {
  connect.query('SELECT * FROM mainmodel', ()=> {
    if (err)
    {
      throw err; console.log(err);
    }
    else{
      console.log(result);

      res.render('cars', {
        title: 'Cars ' ,
         message : "A selection",
         carData: result
       });

    }
  });
});

module.exports = router;
