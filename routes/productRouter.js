var express = require('express');
var router = express.Router();
var Product = require('../models/product');


router.get('/', function(req, res, next) {
    Product.find({}).
    then((formdata) => {
      res.statusCode = 200;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(formdata);
  }, (err) => next(err))
  })


router.post('/', (req, res, next) => {
 
                Product.create(req.body).
                then((products) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
		    console.log("products : " +products);
                    res.json(products);
                  },err => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({msg: err});
                   })
          
      })
module.exports = router;
