'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RouteSchema = Schema({
    name: String,
    driverCar: { type: Schema.ObjectId, ref: 'DriverCar'},
    rate: { type: Schema.ObjectId, ref: 'Rate'},
    template: { type: Schema.ObjectId, ref: 'Template'},
    locationAdd: String,
    price: String,
    date: Date
});

module.exports = mongoose.model('Route', RouteSchema);
