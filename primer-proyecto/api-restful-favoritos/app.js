//configuración de express y rutas
'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.

var app = express();
var api = require('./routes/routes');


app.use( bodyParser.urlencoded({ extended:false }) ); //función middleware <----
app.use( bodyParser.json() );
app.use('/', api);


//Se pueden añadir parámetros a la url de esta manera: /test
//Si añadimos una '?' al parámetro, hacemos que ese parámetro sea opcional.

//Hace falta exportar el fichero para que podamos usar todas los métodos y configuraciones en el resto del proyecto.
module.exports = app;