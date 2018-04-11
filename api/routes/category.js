const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const CategoryController = controllers.CategoryController;

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

/*
* Route de récupération des données
*/
categoryRouter.get('/', function(req, res) {
    CategoryController.getAll()
      .then( (categories) => {
          console.log("\n  APPEL \n");
          res.json(categories);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      })
});


module.exports = categoryRouter;
