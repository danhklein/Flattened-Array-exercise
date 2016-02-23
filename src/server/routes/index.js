var express = require('express');
var router = express.Router();
var FlattenArray = require('./util')

var singleArr = [[1,2,3],[4,5,9]]

var data = FlattenArray(singleArr, function(err,data){
  if(err) {
    return err;
  } else {
    return data;
  }
});
console.log(data)

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
