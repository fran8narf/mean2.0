'use strict'

var favoriteSchema = require('../models/favorite');

function home (req, res) {
	res.status(200).send({
							message: "Welcome to the Home!"
						});
}

function getFavorite (req, res){
	var favId = req.params.id;
	res.status(200).send( { retrieved: true, data: favId} );
}

function getAllFavorites (req, res) {

	res.status(200).send( { retrieved: true } );
}

function addFavorite (req, res){
	var favorite = new favoriteSchema();
	var params = req.body;

	//Recogemos los parámetros del body de la petición.
	favorite.title = params.title;
	favorite.description = params.description;
	favorite.url = params.url;

	//procedemos a hacer el insert en mongoDB.
	favorite.save((err, favoriteStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el favorite.'});
        }else{
            res.status(200).send({message: 'Favorite stored succesfully!' , favorite: favoriteStored});
        }
    });
}

function deleteFavorite (req, res){
	var favId = req.params.id;
	res.status(200).send( { deleted: true, data: favId} );
}

function updateFavorite (req, res){
	var params = req.body;
	var favId = req.params.id;
	res.status(200).send( { updated: true, data: favId } );
}

module.exports = {
	home,
	getFavorite,
	getAllFavorites,
	addFavorite,
	deleteFavorite,
	updateFavorite
}