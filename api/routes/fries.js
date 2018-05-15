const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const FriesController = controllers.FriesController;

const friesRouter = express.Router();
friesRouter.use(bodyParser.json());

/**
* @api {get} /Fries get Fries
* @apiGroup fries
* @apiParam {name} name Fries name
* @apiSuccess {Object[]} Fries
* @apiSuccess {Number} Fries.id Fries id
* @apiSuccess {String} Fries.name Fries name
* @apiSuccess {Float} Fries.price Fries price
* @apiSuccess {Date} Fries.updated_at Update's date
* @apiSuccess {Date} Fries.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Potatoes",
*      "price": 2.70
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
*/

friesRouter.get('/', function(req,res) {
    // Code
    const name = req.query.name;
    const size = req.query.size

    FriesController.getAll(name, size)
      .then( (fries) => {
          res.status(201).json(fries);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});

/**
* @api {post} /Fries add Fries
* @apiGroup fries
* @apiParam {name} name Fries name
* @apiParam {price} price Fries price
* @apiParamExample {json} Input
*    {
*      "name": "Potatoes",
*      "price": 2.70
*    }
* @apiSuccess {Object[]} Fries
* @apiSuccess {Number} Fries.id Fries id
* @apiSuccess {String} Fries.name Fries name
* @apiSuccess {Float} Fries.price Fries price
* @apiSuccess {Date} Fries.updated_at Update's date
* @apiSuccess {Date} Fries.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Potatoes",
*      "price": 1.80
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
*/

friesRouter.post('/', function(req,res) {
    // Code
    const name = req.body.name;
    const price = req.body.price;
    const size_id = req.body.size_id;
    if( name === undefined || price === undefined || size_id === undefined ) {
        res.status(400).json('Name or price or size_id undefined').end();
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


/**
 * @api {delete} /fries/:id Remove Fries
 * @apiGroup fries
 * @apiParam {id} id Fries id
 * @apiSuccessExample
 *    HTTP/1.1 200 Fries deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 Fries not found
 */

friesRouter.delete('/', function(req, res){
  const id = req.query.id;
  FriesController.find(id)
    .then((user) => {
      if (user){

      FriesController.del(id)
        .then((p) => {
            res.status(200).json("Fries deleted");
        });
      }else{
          res.status(403).json("Fries not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});



module.exports = friesRouter;
