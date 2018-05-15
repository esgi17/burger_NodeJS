const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const SizeController = controllers.SizeController;

const sizeRouter = express.Router();
sizeRouter.use(bodyParser.json());

/**
* @api {get} /Size get Size
* @apiGroup size
* @apiParam {name} name Size name
* @apiSuccess {Object[]} Size
* @apiSuccess {Number} Size.id Size id
* @apiSuccess {String} Size.name Size name
* @apiSuccess {Float} Size.price_add Size price_add
* @apiSuccess {Date} Size.updated_at Update's date
* @apiSuccess {Date} Size.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Fat",
*      "price_add": 0.90
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
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

/**
* @api {post} /Size add Size
* @apiGroup size
* @apiParam {name} name Size name
* @apiParam {price_add} price_add Size price_add
* @apiParamExample {json} Input
*    {
*      "name": "Fat",
*      "price_add": 0.90
*    }
* @apiSuccess {Object[]} Size
* @apiSuccess {Number} Size.id Size id
* @apiSuccess {String} Size.name Size name
* @apiSuccess {Float} Size.price_add Size price_add
* @apiSuccess {Date} Size.updated_at Update's date
* @apiSuccess {Date} Size.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Fat",
*      "price_add": 0.90
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
*/
sizeRouter.post('/', function(req, res) {
  const name = req.body.name;
  const price_add = req.body.price_add;
  if( name === undefined || price_add === undefined ) {
      res.status(400).end();
      return;
  }
  SizeController.add(name, price_add)
    .then( (size) => {
        res.status(201).json(size);
    })
    .catch( (err) => {
        console.error(err);
        res.status(500).end();
    });
});


/**
 * @api {delete} /size/:id Remove a Size
 * @apiGroup size
 * @apiParam {id} id Size id
 * @apiSuccessExample
 *    HTTP/1.1 200 Size deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 Size not found
 */
sizeRouter.delete('/', function(req, res){
  const id = req.query.id;
  SizeController.find(id)
    .then((user) => {
      if (user){

      SizeController.del(id)
        .then((p) => {
            res.status(200).json("Size deleted");
        });
      }else{
          res.status(403).json("Size not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});

module.exports = sizeRouter;
