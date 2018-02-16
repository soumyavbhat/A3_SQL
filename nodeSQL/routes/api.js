var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/api/:id', (req, res) => {
  console.log(req.params.id);
  connect.query(`SELECT * FROM mainmodel where model="$req.params.id"`, (err, result)=> {
    if (err)
    {
      throw err; console.log(err);
    }
    else{
      console.log(result);

      res.json({carData:result});
    }
  });

//   router.delete('api/:id', (req,res) =>{
//     console.log("hit delete route");
//
//     connection.query(`Delete from mainmodel where model="${req.params.id}"`, (err, result))
//   {
//     if (err){
//       console.log(err), throw(err);
//     }
//     else{
//       res.json(result);
//     }
//   })
// });
});

module.exports = router;
