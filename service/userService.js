
var mongoose = require('mongoose');
const userService = function(req,res){
  res.send({userId:1,userName:'test'})
}

module.exports = userService;
