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

/**
*   Route de Suppression des données
**/
categoryRouter.delete('/', function(req, res){
  const id = req.query.id;
  CategoryController.find(id)
    .then((user) => {
      if (user){

      CategoryController.del(id)
        .then((p) => {
            res.status(200).json("Category deleted");
        });
      }else{
          res.status(403).json("Category not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});


module.exports = categoryRouter;
