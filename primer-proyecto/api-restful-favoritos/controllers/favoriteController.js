'use strict'

var favoriteSchema = require('../models/favorite');

function home (req, res) {
	res.status(200).send({
							message: "Welcome to the Home!"
						});
}

function getFavorite (req, res){
	var favId = req.params.id;

	favoriteSchema.findById(favId, (err, favorite) => {
		if(err){
            res.status(500).send({message: 'Error al mostrar el resultado.'});
        }else{
        	if(!favorite){
        		res.status(404).send({message: "No se encontró el objeto que buscas."});
        	}else{
        		res.status(200).send({ message: "Mostrando el resultado.", favorite: favorite});
        	}
        }
	});
}

function getAllFavorites (req, res) {
	favoriteSchema.find ({/*paramaetros de busqueda*/}, (err, allFavorites)=>{
		if(err){
            res.status(500).send({message: 'Error al mostrar loss resultados.'});
        }else{
	        if(!allFavorites){
	        	res.status(404).send({message: "No se encontraron favoritos."});
	        }else{
	        	res.status(200).send({ message: "Mostrando todos los favoritos.", allFavorites: allFavorites});
	        }
        }
	}).sort('-_id');
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

function updateFavorite (req, res){
	var favId = req.params.id;
	var updatedFav = req.body;

	console.log(updatedFav);

	favoriteSchema.findByIdAndUpdate(favId, updatedFav, (err, favUpdated)=>{
		if(err){
            res.status(500).send({message: 'Error al actualizard el favorite.'});
        }else{
            res.status(200).send({message: 'Favorite updated succesfully!' , favUpdated: favUpdated});
        }
	});
}

function deleteFavorite (req, res){
	var favId = req.params.id;

	favoriteSchema.findById(favId, (err, favToDelete) =>{
		if(err){
            res.status(500).send({message: 'Error al recuperar el objeto seleccionado.'});
        }
        if(!favToDelete){
        	res.status(404).send({message: "No se encontró el objeto que buscas."});
        }else{
        	favToDelete.remove(err =>{
        		if(err){
        			res.status(500).send({ message: "Objeto no se ha podidio borrar correctamente.", favToDelete: favToDelete});
        		}else{
        			res.status(200).send({ message: "Objeto borrado correctamente.", favToDelete: favToDelete});
        		}
        	});
        }
	});
}


module.exports = {
	home,
	getFavorite,
	getAllFavorites,
	addFavorite,
	deleteFavorite,
	updateFavorite
}