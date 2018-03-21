const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const FriesController = controllers.FriesController;

const friesRouter = express.Router();
friesRouter.use(bodyParser.json());

/*
* Route de récupération des données
*/
friesRouter.get('/', function(req,res) {
    // Code
    const name = req.query.name;
    FriesController.getAll(name)
      .then( (fries) => {
          res.status(201).json(fries);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/*
* Route d'ajout de données
*/
friesRouter.post('/', function(req,res) {
    // Code
    const name = req.body.name;
    const price = req.body.price;
    const size_id = req.body.size_id;
    if( name === undefined || price === undefined || size_id === undefined ) {
        console.log(name +" "+ price +" " + size_id);
        res.status(400).end();
        return;
    }
    FriesController.add(name, parseFloat(price), parseFloat(size_id))
      .then( (fries) => {
          res.status(201).json(fries);
      }).catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});



module.exports = friesRouter;
