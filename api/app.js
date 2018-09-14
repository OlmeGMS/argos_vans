'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var rol_routes = require('./routes/rol');
var user_routes = require('./routes/user');
var city_routes = require('./routes/city');
var location_routes = require('./routes/location');
var costCenter_routes = require('./routes/costCenter');
var driverCar_routes = require('./routes/driverCar');
var car_routes = require('./routes/car');
var rate_routes = require('./routes/rate');
var route_routes = require('./routes/route');
var template_routes = require('./routes/template');
var employee_routes = require('./routes/employee');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Se permite el acceso a todos los dominios
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); //cabecera ajax
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // metodos http
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

// rutas base
app.use('/api', rol_routes);
app.use('/api', user_routes);
app.use('/api', city_routes);
app.use('/api', location_routes);
app.use('/api', costCenter_routes);
app.use('/api', driverCar_routes);
app.use('/api', car_routes);
app.use('/api', rate_routes);
app.use('/api', route_routes);
app.use('/api', template_routes);
app.use('/api', employee_routes);



module.exports = app;
