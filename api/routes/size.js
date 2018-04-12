const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const SizeController = controllers.SizeController;

const sizeRouter = express.Router();
sizeRouter.use(bodyParser.json());

/*
* Route de récupération des données
*/
sizeRouter.get('/', function(req, res) {
  const name = req.query.name;
  SizeController.getAll(name)
    .then( (sizes) => {
        res.json(sizes);
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

/*
* Route d'ajout de données
*/
sizeRouter.post('/', function(req, res) {
  const libelle = req.body.libelle;
  const price_add = req.body.price_add;
  if( libelle === undefined || price_add === undefined ) {
      res.status(400).end();
      return;
  }
  SizeController.add(libelle, price_add)
    .then( (size) => {
        res.status(201).json(size);
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = sizeRouter;
