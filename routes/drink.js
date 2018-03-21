const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const DrinkController = controllers.DrinkController;

const drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());

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

module.exports = drinkRouter;
