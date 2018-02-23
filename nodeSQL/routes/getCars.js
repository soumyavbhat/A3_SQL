var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
// no need to type /getCars becuase it will create a sub route
router.get('/', (req, res) => {
  connect.query('SELECT * FROM mainmodel', (err, result)=> {
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
