const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const DrinkController = controllers.DrinkController;

const drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());

drinkRouter.post('/', function(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const size = req.body.size;
    if( name === undefined || price === undefined || size === undefined ) {
        res.status(400).end();
        return;
    }
    DrinkController.add(name, price, size)
      .then( (drink) => {
          res.status(201).json(drink);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

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
