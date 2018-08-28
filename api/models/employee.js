'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = Schema({
  code: String,
  adress: String,
  id_user: { type: Schema.ObjectId, ref: 'User'},
  id_cost_center: { type: Schema.ObjectId, ref: 'ConstCenter'},
  id_localidad: { type: Schema.ObjectId, ref: 'Location'}

});

module.exports = mongoose.model('Employee', EmployeeSchema);
