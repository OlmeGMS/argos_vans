'use strict'

var express = require('express');
var CarController = require('../controllers/car');

var api  = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/car/:id', md_auth.ensureAuth, CarController.getCar);
api.get('/cars/:page?', md_auth.ensureAuth, CarController.getCars);
api.get('/cars.list', md_auth.ensureAuth, CarController.getListCars);
api.post('/car/', md_auth.ensureAuth, CarController.saveCar);
api.put('/car/:id', md_auth.ensureAuth, CarController.updateCar);
api.delete('/car/:id', md_auth.ensureAuth, CarController.deleteCar);

module.exports = api;
