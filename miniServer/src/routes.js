const express = require("express");
const routes = express.Router();
const path = require("path");

const viewRouter = require('./clientRouter');

routes.use(express.static(path.join(__dirname, '/../clientpublic/')));
routes.get('/', viewRouter.indexPage);
routes.get('/items/:id', viewRouter.indexPage);
routes.get('/items', viewRouter.indexPage);

module.exports = routes;