'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = Schema({
  title: String,
  employee: { type: Schema.ObjectId, ref: 'Employee'},
  date_start: Date,
  date_end: Date,
  confirmation_upload: String,
  confirmation_download: String,
  adress_start: String,
  location_start: String,
  adress_end: String,
  location_end: String,
  cost_center: { type: Schema.ObjectId, ref: 'CostCenter'}

});

module.exports = mongoose.model('Template', TemplateSchema);
