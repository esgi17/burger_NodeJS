const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const DrinkController = controllers.DrinkController;

const drinkRouter = express.Router();
drinkRouter.use(bodyParser.json());

/**
* @api {get} /Drink get Drinks
* @apiGroup drink
* @apiParam {name} name Drink name
* @apiSuccess {Object[]} Drink
* @apiSuccess {Number} Drink.id Drink id
* @apiSuccess {String} Drink.name Drink name
* @apiSuccess {Float} Drink.price Drink price
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
  const size = req.query.size;

  DrinkController.getAll(name, size) //, size
  .then( (drinks) => {
    res.json(drinks);
  })
  .catch( (err) => {
    console.error(err);
    res.status(500).end();
  });
});
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
* @apiSuccess {Float} Drink.price Drink price
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
 * @api {delete} /drink/:id Remove a Drink
 * @apiGroup drink
 * @apiParam {id} id Drink id
 * @apiSuccessExample
 *    HTTP/1.1 200 Drink deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 Drink not found
 */
drinkRouter.delete('/', function(req, res){
  const id = req.query.id;
  DrinkController.find(id)
    .then((user) => {
      if (user){

      DrinkController.del(id)
        .then((p) => {
            res.status(200).json("Drink deleted");
        });
      }else{
          res.status(403).json("Drink not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});

module.exports = drinkRouter;
