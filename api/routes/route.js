'use strict'

var express = require('express');
var RouteController = require('../controllers/route');

var api  = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/route/:id', md_auth.ensureAuth, RouteController.getRoute);
api.get('/route-list', md_auth.ensureAuth, RouteController.getListRoutes);
api.post('/route/', md_auth.ensureAuth, RouteController.saveRoute);
api.put('/route/:id', md_auth.ensureAuth, RouteController.updateRoute);
api.delete('/route/:id', md_auth.ensureAuth, RouteController.deleteRoute);

module.exports = api;
