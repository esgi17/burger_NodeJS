const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const BurgerController = controllers.BurgerController;

const burgerRouter = express.Router();
burgerRouter.use(bodyParser.json());

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


module.exports = burgerRouter;
