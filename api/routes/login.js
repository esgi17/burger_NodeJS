const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const LoginController = controllers.LoginController;

const loginRouter = express.Router();
loginRouter.use(bodyParser.json());

loginRouter.post( '/', function(res, req) ) {
    
}


module.exports = loginRouter;
