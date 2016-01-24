var mongoose = require('mongoose');

var TodoSchema1 = new mongoose.Schema({
  time: String,
  day: String,
  repeat: String,
  from_lat: String,
  from_long: String,
  type: String
});

module.exports = mongoose.model('Table', TodoSchema1);
