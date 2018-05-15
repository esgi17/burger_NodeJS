const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const CategoryController = controllers.CategoryController;

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

/**
* @api {get} /Category get Category
* @apiGroup category
* @apiParam {name} name Category name
* @apiSuccess {Object[]} Category
* @apiSuccess {Number} Category.id Category id
* @apiSuccess {String} Category.name Category name
* @apiSuccess {Date} Category.updated_at Update's date
* @apiSuccess {Date} Category.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Nouveauté",
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
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
 * @api {delete} /category/:id Remove a Category
 * @apiGroup category
 * @apiParam {id} id Category id
 * @apiSuccessExample
 *    HTTP/1.1 200 Category deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 Category not found
 */
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
