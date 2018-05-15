const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const MealController = controllers.MealController;

const BurgerController = controllers.BurgerController;
const DrinkController = controllers.DrinkController;
const FriesController = controllers.FriesController;

const mealRouter = express.Router();
mealRouter.use(bodyParser.json());

/*
* Route d'ajout de données
*/
mealRouter.post('/', function(req, res) {
    const name = req.body.name;
    const discount = req.body.discount;
    const burger_id = req.body.burger_id;
    const drink_id = req.body.drink_id;
    const fries_id = req.body.fries_id;
    var friesprice = undefined;
    var burgerprice = undefined;
    var price = undefined;

    BurgerController.getPrice(parseInt(burger_id))
      .then((burger) => {
        burgerprice = burger.price;
      })

    FriesController.getPrice(parseInt(fries_id))
      .then((fries) => {
        friesprice = fries.price;
      })

    DrinkController.getPrice(parseInt(drink_id))
      .then( (drink) => {
        price = (drink.price + friesprice)*discount + burgerprice ;
        if( name === undefined || discount === undefined || burger_id === undefined || drink_id === undefined|| fries_id === undefined || price === undefined) {
            res.status(400).end();
            return;
        }
        MealController.add(name, discount, parseInt(burger_id), parseInt(drink_id), parseInt(fries_id), parseFloat(price))
          .then( (meal) => {
              res.status(201).json(meal);
          })
          .catch( (err) => {
              res.status(500).end();
          });
      }).catch( (err) => {
          console.error(err);
      })
});

/*
* Route de récupération des données
*/
mealRouter.get('/', function(req, res) {
    const name = req.query.name;
    MealController.getAll(name)
      .then( (meals) => {
          res.json(meals);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

module.exports = mealRouter;
