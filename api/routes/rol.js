'use strict'

var express = require('express');
var RolController =  require('../controllers/rol');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.get('/probando-controlador', RolController.pruebas);
api.get('/rol/:id', md_auth.ensureAuth, RolController.getRol);
api.get('/roles/:page?', md_auth.ensureAuth, RolController.getRoles);
api.get('/roles-list/', RolController.getListRoles);
api.post('/rol/', RolController.saveRol);
api.put('/rol/:id', md_auth.ensureAuth, RolController.updateRol);
api.delete('/rol/:id', md_auth.ensureAuth, RolController.deleteRol);

module.exports = api;
