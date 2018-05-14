const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const FriesController = controllers.FriesController;
const UserController = controllers.UserController;

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
* MiddleWare de récupération de Token
*/
friesRouter.use(function(req, res, next) {
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
