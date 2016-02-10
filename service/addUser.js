var mongoose = require('mongoose');
var User = require('../data/User')
var errorHandler = require('../utils/handleError')
module.exports = function(req,res){
  console.log("inPost")
  console.log(req.body)
  var user = User(req.body)
  user.save(function(error){
    if(error){
      errorHandler(error, res)
    }else{
      res.end()
    }
  })
}
