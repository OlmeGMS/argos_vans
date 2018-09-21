'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Route = require('../models/route');
var Car = require('../models/car');
var Rate = require('../models/rate');
var Template = require('../models/template');

function getRoute(req, res)
{
  var routeId = req.params.id;

  Route.findById(routeId).populate({
    path: 'driverCar',
    populate: {
        path: 'driverCar',
        model: 'DriverCar'
    },
  }).populate({
    path: 'rate',
    populate: {
      path: 'rate',
      model: 'Rate'
    },
  }).populate({
    path: 'template',
    populate: {
      path: 'template',
      model: 'Template'
    }
  }).exec((err, route) => {
    if (err) {
      res.status(500).send({
        message: 'Error en ela petición'
      });
    } else {
      if (!route) {
        res.status(404).send({
          message: 'La ruta no existe'
        });
      } else {
        res.status(200).send({
          route
        });
      }
    }
  });
}

function getListRoutes(req, res)
{
  Routes.find({}, function(err, exams) {
    if (err) {
      res.status(500).send({
        message: 'Error en la petición'
      });
    } else {
      if (!routes) {
        res.status(404).send({
          message: 'No hay rutas !!'
        });
      } else {
        res.status(200).send({
          routes: routes
        });
      }
    }
  });

}

function saveRoute(req, res)
{
  var route = new Route();

  var params = req.body;
  route.name = params.name;
  route.driverCar = params.driverCar;
  route.rate = params.rate;
  route.template = params.template;
  route.locationAdd = params.locationAdd;
  route.price = params.price;
  route.date = params.date;

  route.save((err, routeStored) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!routeStored) {
        res.status(404).send({message: 'No se pudo guardar la ruta'});
      }else {
        res.status(200).send({route: routeStored});
      }
    }
  });
}

function updateRoute(req, res)
{
  var routeId = req.params.id;
  var update = req.body;

  Route.findByIdAndUpdate(routeId, update, (err, routeUpdate) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!routeUpdate) {
        res.status(404).send({message: 'No se puedo actualizar la ruta'});
      }else {
        res.status(200).send({route: routeUpdate});
      }
    }
  });
}

function deleteRoute(req, res)
{
  var routeId = req.params.id;

  Route.findByIdAndRemove(routeId, (err, routeRemoved) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!routeRemoved) {
        res.status(404).send({message: 'No se pudo eliminar la ruta'});
      }else {
        res.status(200).send({route: routeRemoved});
      }
    }
  });
}


module.exports = {
  getRoute,
  getListRoutes,
  saveRoute,
  updateRoute,
  deleteRoute

}
