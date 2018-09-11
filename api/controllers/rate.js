'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Rate = require('../models/rate');

function getRate(req, res)
{
  var rateId = req.params.id;

  Rate.findById(rateId, (err, rate) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!rate) {
        res.status(404).send({message: 'La tarifa no existe'});
      }else {
        res.status(200).send({rate});
      }
    }
  });
}

function getRates(req, res)
{
  if (req.params.page) {
    var page = req.params.page;
  }else {
    var page = 1;
  }

  var itemsPerPage = 3;
  Rate.find().sort('rate').paginate(page, itemsPerPage, function(err, rates, total){
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!rates) {
        res.status(404).send({message: 'No hay tarifas creadas'});
      }else {
        res.status(200).send({rates: rates});
      }
    }
  });
}

function getListRates(req, res)
{
  Rate.find({}, function(err, rates){
    if(err){
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!rates) {
        res.status(404).send({message: 'No hay tarifas creadas !!'});
      }else{
        res.status(200).send({rates: rates});
      }

    }
  });
}

function saveRate(req, res)
{
  var rate = new Rate();
  var params = req.body;
  rate.origen = params.origen;
  rate.destino = params.destino;
  rate.precio = params.precio;

  Rate.save((err, rateStored) => {
    if (err) {
      res.status(500).send({message: 'Error no se pudo guardar la tarifa'});
    }else {
      if (!rateStored) {
        res.status(404).send({message: 'La tarifa no fue guardada'});
      }else {
        res.status(200).send({rate: rateStored});
      }
    }
  });
}

function updateRate(req, res)
{
  var rateId = req.params.id;
  var update = req.body;

  Rate.findByIdAndUpdate(rateId, update, (err, rateUpdate) => {
    if (err) {
      res.status(500).send({message: 'Error al actualizar la tarifa'});
    }else {
      if (!rateUpdate) {
        res.status(404).send({message: 'La tarifa no pudo ser actualizada'});
      }else {
        res.status(200).send({rate: rateUpdate});
      }
    }
  });
}

function deleteRate(req, res)
{
  var rateId = req.params.id;

  Rate.findByIdAndRemove(rateId, (err, rateRemove) => {
    if (err) {
      res.status(500).send({message: 'Error al eliminar la tarifa'});
    }else {
      if (!rateRemove) {
        res.status(404).send({message: 'La tarifa no pudo ser eliminada'});
      }else {
        res.status(200).send({rateRemove});
      }
    }
  });
}


module.exports = {
  getRate,
  getRates,
  getListRates,
  saveRate,
  updateRate,
  deleteRate

}