'use strict'

function home (req, res) {
	res.status(200).send({
							message: "Welcome to the Home!"
						});
}

function getFavorite (req, res){
	var favId = req.params.id;
	res.status(200).send( {done: true, data: favId} );
}

function getAllFavorites (req, res) {

	res.status(200).send( { done: true } );
}

function addFavorite (req, res){
	var params = req.body;
	res.status(200).send( { done: true, favorite: params } );
}

function deleteFavorite (req, res){
	var favId = req.params.id;
	res.status(200).send( { done: true, data: favId} );
}

function updateFavorite (req, res){
	var params = req.body;
	var favId = req.params.id;
	res.status(200).send( { done: true, data: favId } );
}

module.exports = {
	home,
	getFavorite,
	getAllFavorites,
	addFavorite,
	deleteFavorite,
	updateFavorite
}