'use strict'

var express = require('express');
var bodyParser = require('body-parser'); //MIDDLEWARE - funcionalidad que se ejecuta antes de que se ejecute el script de Node.

var app = express();
var port = process.env.PORT || 3000; //configuración del puerto.

app.use( bodyParser.urlencoded({ extended:false }) ); //función middleware <----
app.use( bodyParser.json() );


app.get('/', function(req, res){
	res.status(200).send({
							message: "Welcome to the Home!", 
							data: [2,3,4]	
						});
});
//Se pueden añadir parámetros a la url de esta manera: /test
//Si añadimos una '?' al parámetro, hacemos que ese parámetro sea opcional.

app.listen(port, function(){
	console.log(`API server Server is working ok on localhost:${port}!`);
}); //como primer parámetro recibe el puerto que se va a usar.

