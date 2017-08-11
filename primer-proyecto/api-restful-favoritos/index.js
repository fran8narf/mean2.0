'use strict'

var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log("API server Server is working ok on localhost:3000!");
}); //como primer parámetro recibe el puerto que se va a usar.

