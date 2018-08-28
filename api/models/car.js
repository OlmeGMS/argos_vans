'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CasSchema = Schema({
  placa: String,
  status: Boolean,
  capacity: String,
  adress: String
});

module.exports = mongoose.model('Car', CasSchema);
