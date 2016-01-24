var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  email: String,
  pass: String,
  dob: String,
  pin: String,
  address: String,
  city: String,
  long: String,
  lat: String,
  type: String,
  major: String
});

module.exports = mongoose.model('Todo', TodoSchema);
