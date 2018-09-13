'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RateSchema = Schema({
  origen: String,
  destino: String,
  precio: Number,
});

module.exports = mongoose.model('RateSchema', RateSchema);
