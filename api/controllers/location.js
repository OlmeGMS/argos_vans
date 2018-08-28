'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var City = require('../models/city');
var Localidad = require('../models/location');

function getLocation(req, res)
{
  var locationId = req.params.id;

  Localidad.findById(locationId, (err, location) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!location) {
        res.status(404).send({message: 'La localidad no exite'});
      }else {
        res.status(200).send({location});
      }
    }
  });
}

function getLocations(req, res)
{
  if (req.params.page) {
    var page = req.params.page;
  }else {
    var page = 1;
  }

  var itemsPerPage = 3;

  Localidad.find().sort('location').paginate(page, itemsPerPage, function(err, locations, tola){
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if(!locations){
        res.status(404).send({message: 'No hay localidads !!'});
      }else{
        res.status(200).send({locations: locations});
      }
    }
  });
}

function getListLocations(req, res)
{
  Localidad.find({}, function(err, locations){
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!locations) {
        res.status(404).send({message: 'No hay localidades !!'});
      }else {
        res.status(200).send({locations: locations});
      }
    }
  });
}


module.exports = {
  getLocation,
  getLocations,
  getListLocations
}
