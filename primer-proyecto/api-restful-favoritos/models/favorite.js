//Esquema del tipo de documentos que se van a guardar en este proyecto.
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Esto nos permite definir objetos de tipo esquema para mongoDB.

var favoriteSchema = Schema({
	title: String,
	url: String,
	description: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);