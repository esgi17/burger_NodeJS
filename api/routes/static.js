const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const StaticController = controllers.StaticController;

const staticRouter = express.Router();
staticRouter.use(bodyParser.json());
staticRouter.use(express.static('public'));



module.exports = staticRouter;
