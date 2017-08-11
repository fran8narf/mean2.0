'use strict'

function home (req, res) {
	res.status(200).send({
							message: "Welcome to the Home!"
						});
}

function getFavorite (req, res){
	var favId = req.params.id;

	res.status(200).send( {data: favId} );
}

function getAllFavorites (req, res) {

}

function addFavorite (req, res){
	var params = req.body;

	res.status(200).send( { favorite: params } )
}

function deleteFavorite (req, res){
	
}

function updateFavorite (req, res){
	
}

module.exports = {
	home,
	getFavorite,
	addFavorite,
	getAllFavorites,
	deleteFavorite,
	updateFavorite
}