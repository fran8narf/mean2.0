'user strict'

var express = require('express');
var favoriteController = require('../controllers/favoriteController');

var api = express.Router();

api.get('/', favoriteController.home);
api.get('/favorite/:id', favoriteController.getFavorite);
api.get('/favoritesList', favoriteController.getAllFavorites)

api.post('/addFavorite', favoriteController.addFavorite);

api.put('/updateFavorite/:id', favoriteController.updateFavorite);

api.delete('/deleteFavorite/:id', favoriteController.deleteFavorite);

module.exports = api;