const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;
const SizeController = controllers.SizeController;

const sizeRouter = express.Router();
sizeRouter.use(bodyParser.json());

/**
* Route de récupération des données
* /size/ récupère toutes les boissons correspondante aux params envoyés
**/
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
* MiddleWare de vérification de Token
*/
sizeRouter.use(function(req, res, next) {
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
