'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationAddSchema = Schema({
  price: String

});

module.exports = mongoose.model('LocationAdd', LocationAddSchema);
