'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = Schema({
  id_employee: { type: Schema.ObjectId, ref: 'Employee'},
  id_route: { type: Schema.ObjectId, ref: 'Route'},
  date_start: Date,
  date_end: Date,
  confirmation_upload: String,
  confirmation_download: String,
  adress_start: String,
  location_start: String,
  adress_end: String,
  location_end: String,
  id_cost_center: { type: Schema.ObjectId, ref: 'CostCenter'}



});

module.exports = mongoose.model('Template', TemplateSchema);
