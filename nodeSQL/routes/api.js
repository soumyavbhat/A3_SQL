var express = require('express');
var connect = require('../utils/sqlConnect');

var bodyParser = require('body-parser');


var router = express.Router();

 // middleware -> before response adter request
 // parse the request - convert the incoming data to something express can use

 router.use(bodyParser.urlencoded({extended : false}));
 router.use(bodyParser.json());

router.use((req, res, next) => {
var now = new Date();
var timestamp = now.toLocaleString('en-us',{
  hour : "numeric",
  minute: "numeric",
  hour12: true
});
  console.log(`you made a ${req.method} call`);
  console.log(`you made the call @ ${timestamp}`);
  console.log(req);
  next();
  // run the next method(get, put, post, ..)
});




/* GET home page. */
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  console.log("hit an api");
  connect.query(`SELECT * FROM mainmodel where model="${req.params.id}"`, (err, result)=> {
    if (err)
    {
      throw err; console.log(err);
    }
    else{
      console.log(result);

      res.json({carData:result});
    }
  });
    });

  router.delete('/:id', (req, res) =>{
    console.log("hit delete route");

    connect.query(`Delete from mainmodel where model="${req.params.id}"`, (err, result) =>  {
    if (err){
      throw(err);
    }
    else{
      res.json(result);
    }
//   })
});
});

router.post('/:id', (req, res) =>{
  console.log(`hit post route`);

  connect.query(`Insert into mainmodel (id, model, modelName, pricing, modelDetails, imgPath) Values(Null, "${req.body.model}","${req.body.modelName}", "${req.body.pricing}", "${req.body.modelDetails}", "${req.body.imgPath}");`,  (err, data) =>  {
  if (err){
    throw(err);
  }
  else{
    res.json(data);
  }
});
});

router.put('/:id', (req, res) =>{
  console.log(`hit post route`);

  connect.query(`Insert into mainmodel (id, model, modelName, pricing, modelDetails, imgPath) Values(Null, "${req.body.model}","${req.body.modelName}", "${req.body.pricing}", "${req.body.modelDetails}", "${req.body.imgPath}");`,  (err, data) =>  {
  if (err){
    throw(err);
  }
  else{
    res.json(data);
  }
});
});


module.exports = router;
