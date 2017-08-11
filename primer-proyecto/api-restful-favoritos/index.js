'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var app = require('./app');
var port = process.env.PORT || 3000; //configuración del puerto.

var db = 'mongodb://localhost:27017/favoritesDB';

mongoose.connect(db, (err, res) => {
	if (err){
		throw err;
	}else{
		console.log("CONEXIÓN A MONGODB CORRECTA.");
		app.listen(port, () => {
			console.log(`API server Server is working ok on localhost:${port}!`);
		}); //como primer parámetro recibe el puerto que se va a usar.
	}
});