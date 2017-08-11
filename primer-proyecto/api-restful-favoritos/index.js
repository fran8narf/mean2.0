'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.
var app = express();

app.listen(3000, function(){
	console.log("API server Server is working ok on localhost:3000!");
}); //como primer parámetro recibe el puerto que se va a usar.

