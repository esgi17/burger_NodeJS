const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const BurgerController = controllers.BurgerController;
const UserController = controllers.UserController;

const burgerRouter = express.Router();
burgerRouter.use(bodyParser.json());

/*
* Route de récupération des données
*/
burgerRouter.get('/', function(req, res) {
    const name = req.query.name;
    BurgerController.getAll(name)
      .then( (burgers) => {
          res.json(burgers);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});

/*
* MiddleWare de récupération de Token
*/
burgerRouter.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log(token);
  // decode token
  if (UserController.checkToken(token)) {
      next();
  } else {
    return res.status(403).send({
        success: false,
        message: 'No token or bad token provided.'
    });
  }
});

/*
* Route d'ajout de données
*/
burgerRouter.post('/', function(req,res) {
    const name = req.body.name;
    const price = req.body.price;
    if( name === undefined || price === undefined ) {
        res.status(400).end();
        return;
    }
    BurgerController.add(name, price)
      .then( (p) => {
          res.status(201).json(p);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

module.exports = burgerRouter;
