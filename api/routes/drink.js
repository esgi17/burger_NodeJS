const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const DrinkController = controllers.DrinkController;

const drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());

/**
* @api {post} /Drink add Drink
* @apiGroup drink
* @apiParam {name} name Drink name
* @apiParam {price} price Drink price
* @apiParamExample {json} Input
*    {
*      "name": "Coca Cola",
*      "price": 1.80
*    }
* @apiSuccess {Object[]} Drink
* @apiSuccess {Number} Drink.id Drink id
* @apiSuccess {String} Drink.name Drink name
* @apiSuccess {Float} Drink.price Task price
* @apiSuccess {Date} Drink.updated_at Update's date
* @apiSuccess {Date} Drink.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Coca cola",
*      "price": 1.80
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 400 Name or price or size_id undefined
*/
drinkRouter.post('/', function(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const sizeId = req.body.size_id;
    if( name === undefined || price === undefined || sizeId == undefined ) {
        res.status(400).json('Name or price or size_id undefined').end();
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

/**
* @api {get} /Drink get Drinks
* @apiGroup drink
* @apiParam {name} name Drink name
* @apiSuccess {Object[]} Drink
* @apiSuccess {Number} Drink.id Drink id
* @apiSuccess {String} Drink.name Drink name
* @apiSuccess {Float} Drink.price Task price
* @apiSuccess {Date} Drink.updated_at Update's date
* @apiSuccess {Date} Drink.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Coca cola",
*      "price": 1.80
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
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
