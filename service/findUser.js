var mongoose = require('mongoose');
var User = require('../data/User')
var errorHandler = require('../utils/handleError')
module.exports = function(req,res){
  var userName = req.params.userName
  console.log("IN get"+userName)
  User.find({'name':userName},function(error,users){
    if(error){
      errorHandler(error, res)
    }
    res.send(users)
  })

}
