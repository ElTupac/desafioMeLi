const express = require('express');
const routes = express.Router();

const itemsController = require('./itemsController');

routes.get('/items', itemsController.getSearch);
routes.get('/items/:id', itemsController.getItem);

module.exports = routes;