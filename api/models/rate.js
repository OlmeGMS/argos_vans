'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RateSchema = Schema({
  origen: Number,
  destino: Number,
  precio: Number,
});

module.exports = mongoose.model('RateSchema', RateSchema);
