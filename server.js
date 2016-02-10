
var express = require('express')
var userRoute = require('./routes/userRoutes');
var app = express()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/service', userRoute);

app.listen(3000, function(){
  console.log("Server started att http://localhost:3000/")
})
