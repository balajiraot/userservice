var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  userName: { type: String, required: true, unique: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  console.log("In Pre save")
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


// make this available to our users in our Node applications
module.exports = userSchema;
