'user strict'

var express = require('express');
var favoriteController = require('../controllers/favoriteController');

var api = express.Router();

api.get('/', favoriteController.prueba);

module.exports = api;