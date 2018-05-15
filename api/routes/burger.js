const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const BurgerController = controllers.BurgerController;

const burgerRouter = express.Router();
burgerRouter.use(bodyParser.json());

 /**
 * @api {post} /Burger add Burger
 * @apiGroup burger
 * @apiParam {name} name Burger name
 * @apiParam {price} price Burger price
 * @apiParamExample {json} Input
 *    {
 *      "name": "Big Mac",
 *      "price": 4.50
 *    }
 * @apiSuccess {Object[]} Burger
 * @apiSuccess {Number} Burger.id Burger id
 * @apiSuccess {String} Burger.name Burger name
 * @apiSuccess {Float} Burger.price Task price
 * @apiSuccess {Date} Burger.updated_at Update's date
 * @apiSuccess {Date} Burger.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    [{
 *      "id": 1,
 *      "name": "Big Mac",
 *      "price": 4.50
 *      "updated_at": "2018-05-14T00:00:00.000Z",
 *      "created_at": "2018-05-14T00:00:00.000Z"
 *    }]
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 400 Name or price undefined
 */
burgerRouter.post('/', function(req,res) {
    const name = req.body.name;
    const price = req.body.price;
    if( name === undefined || price === undefined ) {
        res.status(400).json('Name or price undefined').end();
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

 /**
 * @api {get} /Burger get Burger
 * @apiGroup burger
 * @apiParam {name} name Burger name
 * @apiSuccess {Object[]} Burger
 * @apiSuccess {Number} Burger.id Burger id
 * @apiSuccess {String} Burger.name Burger name
 * @apiSuccess {Float} Burger.price Task price
 * @apiSuccess {Date} Burger.updated_at Update's date
 * @apiSuccess {Date} Burger.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    [{
 *      "id": 12,
 *      "name": "Big Mac",
 *      "price": 4.50
 *      "updated_at": "2018-05-14T00:00:00.000Z",
 *      "created_at": "2018-05-14T00:00:00.000Z"
 *    }]
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
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

burgerRouter.delete('/', function(req, res){
  const id = req.query.id;
  BurgerController.find(id)
    .then((user) => {
      if (user){

      BurgerController.del(id)
        .then((p) => {
            res.status(200).json("Burger deleted");
        });
      }else{
          res.status(403).json("Burger not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});


module.exports = burgerRouter;
