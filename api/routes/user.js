const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;

const userRouter = express.Router();
//userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true}));

userRouter.post('/login', function(req, res) {
    console.log(req.body.username);
    if( req.body.username === undefined) {
        res.status(400);
        return;
    }
    res.status(201).json(req.body.username);
})


/**
 * @api {delete} /user/:id Remove a User
 * @apiGroup user
 * @apiParam {id} id User id
 * @apiSuccessExample
 *    HTTP/1.1 200 User deleted
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 403 User not found
 */
userRouter.delete('/', function(req, res){
  const id = req.query.id;
  UserController.find(id)
    .then((user) => {
      if (user){

      UserController.del(id)
        .then((p) => {
            res.status(200).json("User deleted");
        });
      }else{
          res.status(403).json("User not found")
      }
    })
        .catch((err) => {
          console.error(err);
          res.status(500).end();
        });
});

module.exports = userRouter;
