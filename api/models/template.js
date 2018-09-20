'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = Schema({
  title: String,
  employee: {},
  date_start: Date,
  date_end: Date,
  confirmation_upload: String,
  confirmation_download: String,
  address_start: String,
  location_start: String,
  address_end: String,
  location_end: String,
  cost_center: { type: Schema.ObjectId, ref: 'CostCenter'}

});

module.exports = mongoose.model('Template', TemplateSchema);
