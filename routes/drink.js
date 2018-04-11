const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const DrinkController = controllers.DrinkController;
const UserController = controllers.UserController;

const drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());

/*
* Route de récupération des données
*/
drinkRouter.get('/', function(req, res) {
    const name = req.query.name;
    DrinkController.getAll(name)
      .then( (drinks) => {
          res.json(drinks);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/*
* MiddleWare de récupération de Token
*/
drinkRouter.use(function(req, res, next) {
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
drinkRouter.post('/', function(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const sizeId = req.body.size_id;
    if( name === undefined || price === undefined || sizeId == undefined ) {
        res.status(400).end();
        return;
    }
    DrinkController.add(name, price, parseFloat(sizeId))
      .then( (drink) => {
          res.status(201).json(drink);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

module.exports = drinkRouter;
