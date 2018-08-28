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


module.exports = {
  getLocation
}
