'use strict'
var app = require('./app');

var port = process.env.PORT || 3000; //configuración del puerto.

app.listen(port, () => {
	console.log(`API server Server is working ok on localhost:${port}!`);
}); //como primer parámetro recibe el puerto que se va a usar.

