'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.

var app = express();
var port = process.env.PORT || 3000; //configuración del puerto.

app.use( bodyParser.urlencoded({ extended:false }) ); //función middleware <----
app.use( bodyParser.json() );

app.listen(port, function(){
	console.log(`API server Server is working ok on localhost:${port}!`);
}); //como primer parámetro recibe el puerto que se va a usar.

