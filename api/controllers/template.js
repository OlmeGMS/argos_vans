'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Template = require('../models/template');
var Route = require('../models/route');
var Employee = require('../models/employee');
var CostCenter = require('../models/costCenter');


function getTemplate(req, res)
{
  var templateId = req.params.id;

  Template.findById(templateId).populate({
    path: 'employee',
    populate:{
      path: 'employee',
      model: 'Employee'
    },
  }).
  populate({
    path: 'costCenter',
    populate: {
      path: 'costCenter',
      model: 'CostCenter'
    },
  }).exec((err, template) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!template) {
        res.status(404).send({message: 'La planilla no exite !!'});
      }else {
        res.status(200).send({template});
      }
    }
  });
}

function getListTemplate(req, res)
{
  Template.find({}, function(err, templates) {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!templates) {
        res.status(404).send({message: 'No planillas'});
      }else {
        res.status(200).send({templates: templates});
      }
    }
  });
}


function saveTemplate(req, res)
{
  var template = new Template();
  var params = req.body;
  template.title = params.title;
  template.employee = params.employee;
  template.date_start = params.date_start;
  template.confirmation_upload = null;
  template.confirmation_download = null;
  template.adress_start = params.adress_start;
  template.location_start = params.location_start;
  template.adress_end = params.adress_end;
  template.location_end = params.location_end;
  template.cost_center = params.cost_center;

  template.save((err, templateStored) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!templateStored) {
        res.status(404).send({message: 'No se puudo guardar la planilla'});
      }else {
        res.status(200).send({template: templateStored});
      }
    }
  });
}

function updateTemplate(req, res)
{
  var templateId = req.params.id;
  var update = req.body;

  Template.findByIdAndUpdate(templateId, update, (err, templateUpdate) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!templateUpdate) {
        res.status(404).send({message: 'No se pudo actualizar la planilla'});
      }else {
        res.status(200).send({template: templateUpdate});
      }
    }
  });
}

function deleteTemplate(req, res)
{
  var templateId = req.params.id;

  Template.findByIdAndRemove(templateId, (err, templateRemoved) => {
    if (err) {
      res.status(500).send({message: 'Error en la petición'});
    }else {
      if (!templateRemoved) {
        res.status(404).send({message: 'No se pudo eliminar la planilla'});
      }else{
        res.status(200).send({template: templateRemoved});
      }
    }
  });
}

module.exports = {
  getTemplate,
  getListTemplate,
  saveTemplate,
  updateTemplate,
  deleteTemplate
}
