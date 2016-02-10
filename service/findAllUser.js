var mongoose = require('mongoose');
var User = require('../data/User')
var errorHandler = require('../utils/handleError')
module.exports = function(req,res){
  User.find({},function(error,users){
    if(error){
      errorHandler(error,res)
    }
    res.send(users)
  })

}
