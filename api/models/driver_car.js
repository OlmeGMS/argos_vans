'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DriverCarSchema = Schema({
  driver: { type: Schema.ObjectId, ref: 'User'},
  car: { type: Schema.ObjectId, ref: 'Car'},
  status: Boolean
});

module.exports = mongoose.model('DriverCar', DriverCarSchema);
