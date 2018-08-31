'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RouteSchema = Schema({
    id_user: { type: Schema.ObjectId, ref: 'User'},
    id_car: { type: Schema.ObjectId, ref: 'Car'},
    id_template: { type: Schema.ObjectId, ref: 'Template'},
    date: Date
});

module.exports = mongoose.model('Route', RouteSchema);
