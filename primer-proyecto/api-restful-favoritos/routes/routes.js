'user strict'

var express = require('express');
var favoriteController = require('../controllers/favoriteController');

var api = express.Router();

api.get('/', favoriteController.home);
api.get('/favorite/:id', favoriteController.getFavorite);

api.post('/addFavorite', favoriteController.addFavorite);

module.exports = api;