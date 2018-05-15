const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const MealController = controllers.MealController;

const BurgerController = controllers.BurgerController;
const DrinkController = controllers.DrinkController;
const FriesController = controllers.FriesController;

const mealRouter = express.Router();
mealRouter.use(bodyParser.json());

/**
* @api {get} /Meal get Meal
* @apiGroup meal
* @apiParam {name} name Meal name
* @apiSuccess {Object[]} Meal
* @apiSuccess {Number} Meal.id Meal id
* @apiSuccess {String} Meal.name Meal name
* @apiSuccess {Double} Meal.discount Meal discount
* @apiSuccess {Double} Meal.drink_id Meal drink_id
* @apiSuccess {Double} Meal.fries_id Meal fries_id
* @apiSuccess {Double} Meal.burger_id Meal burger_id
* @apiSuccess {Double} Meal.price Meal price
* @apiSuccess {Date} Meal.updated_at Update's date
* @apiSuccess {Date} Meal.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Maxi Best Of",
*      "discount": 0.7,
*      "drink_id": 3,
*      "fries_id": 2,
*      "burger_id": 1,
*      "price": 8.80,
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
*/
mealRouter.get('/', function(req, res) {
  const name = req.query.name;
  MealController.getAll(name)
  .then( (meals) => {
    res.json(meals);
  })
  .catch( (err) => {
    console.error(err);
    res.status(500).end();
  });
});
/**
* @api {post} /Meal add Meal
* @apiGroup meal
* @apiParam {name} name Meal name
* @apiParam {discount} discount Meal discount
* @apiParamExample {json} Input
*    {
*     	"name": "Menu CBO",
*     	"discount": 0.75,
*     	"drink_id": 2,
*     	"fries_id": 2,
*     	"burger_id": 3
*    }
* @apiSuccess {Object[]} Meal
* @apiSuccess {Number} Meal.id Meal id
* @apiSuccess {String} Meal.name Meal name
* @apiSuccess {Double} Meal.discount Meal discount
* @apiSuccess {Double} Meal.drink_id Meal drink_id
* @apiSuccess {Double} Meal.fries_id Meal fries_id
* @apiSuccess {Double} Meal.burger_id Meal burger_id
* @apiSuccess {Double} Meal.price Meal price
* @apiSuccess {Date} Meal.updated_at Update's date
* @apiSuccess {Date} Meal.created_at Register's date
* @apiSuccessExample {json} Success
*    HTTP/1.1 201 OK
*    [{
*      "id": 1,
*      "name": "Maxi Best Of",
*      "discount": 0.7,
*      "drink_id": 3,
*      "fries_id": 2,
*      "burger_id": 1,
*      "price": 8.80,
*      "updated_at": "2018-05-14T00:00:00.000Z",
*      "created_at": "2018-05-14T00:00:00.000Z"
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 400 Data missing
*/
mealRouter.post('/', function(req, res) {
    const name = req.body.name;
    const discount = req.body.discount;
    const burger_id = req.body.burger_id;
    const drink_id = req.body.drink_id;
    const fries_id = req.body.fries_id;
    var friesprice = undefined;
    var burgerprice = undefined;
    var price = undefined;

    BurgerController.find(parseInt(burger_id))
      .then((burger) => {
        burgerprice = burger.price;
      })

    FriesController.find(parseInt(fries_id))
      .then((fries) => {
        friesprice = fries.price;
      })

    DrinkController.find(parseInt(drink_id))
      .then( (drink) => {
        price = (drink.price + friesprice)*discount + burgerprice ;
        if( name === undefined || discount === undefined || burger_id === undefined || drink_id === undefined|| fries_id === undefined || price === undefined) {
<<<<<<< HEAD
            res.status(403).json('Date missing').end();
=======
            res.status(400).json("Data missing").end();
>>>>>>> 11f4113c97bf8b14fd948ba54fe1bcaac44a91ba
            return;
        }
        MealController.add(name, discount, parseInt(burger_id), parseInt(drink_id), parseInt(fries_id), parseFloat(price))
          .then( (meal) => {
              res.status(201).json(meal);
          })
          .catch( (err) => {
              res.status(500).end();
          });
      }).catch( (err) => {
          console.error(err);
          res.status(400).json("Data missing").end();
          return;
      })
});


/**
 * @api {delete} /meal/:id Remove a Meal
 * @apiGroup meal
 * @apiParam {id} id Meal id
 * @apiSuccessExample
 *    HTTP/1.1 200 Meal deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 Meal not found
 */
mealRouter.delete('/', function(req, res){
  const id = req.query.id;
  MealController.find(id)
    .then((user) => {
      if (user){

      MealController.del(id)
        .then((p) => {
            res.status(200).json("Meal deleted");
        });
      }else{
          res.status(403).json("Meal not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});

module.exports = mealRouter;
