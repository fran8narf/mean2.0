//configuración de express y rutas
'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.

var app = express();
var api = require('./routes/routes');


app.use( bodyParser.urlencoded({ extended:false }) ); //función middleware <----
app.use( bodyParser.json() );

//middleware cabeceras HTTP
app.use( (req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*'); //Cualquiera puede hacer peticiones a nuestra API REST || Si se quiere capar el acceso desde una URL habría que sustituirlo por el asterisco.
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');

	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');

	next();
});

app.use('/', api);


//Se pueden añadir parámetros a la url de esta manera: /test
//Si añadimos una '?' al parámetro, hacemos que ese parámetro sea opcional.

//Hace falta exportar el fichero para que podamos usar todas los métodos y configuraciones en el resto del proyecto.
module.exports = app;