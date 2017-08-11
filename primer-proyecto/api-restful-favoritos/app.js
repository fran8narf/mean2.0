//configuración de express y rutas
'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.

var app = express();


app.use( bodyParser.urlencoded({ extended:false }) ); //función middleware <----
app.use( bodyParser.json() );


app.get('/', (req, res) => {
	res.status(200).send({
							message: "Welcome to the Home!", 
							data: [2,3,4]	
						});
});
//Se pueden añadir parámetros a la url de esta manera: /test
//Si añadimos una '?' al parámetro, hacemos que ese parámetro sea opcional.

//Hace falta exportar el fichero para que podamos usar todas los métodos y configuraciones en el resto del proyecto.
module.exports = app;