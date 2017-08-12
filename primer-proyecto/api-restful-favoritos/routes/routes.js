'user strict'

var express = require('express');
var favoriteController = require('../controllers/favoriteController');

var api = express.Router();

api.get('/', favoriteController.home);
api.get('/favorite/:id', favoriteController.getFavorite);
api.get('/favorites', favoriteController.getAllFavorites)

api.post('/favorite', favoriteController.addFavorite);

api.put('/favorite/:id', favoriteController.updateFavorite);

api.delete('/favorite/:id', favoriteController.deleteFavorite);

module.exports = api;