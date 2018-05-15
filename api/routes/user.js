const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;

const jwt = require('jsonwebtoken');
const config = require('../config');
const userRouter = express.Router();
userRouter.use(bodyParser.json());


 /**
 * @api {post} /User add User
 * @apiGroup user
 * @apiParam {String} login User login
 * @apiParam {String} password User password
  * @apiParam {Boolean} admin User isAmdmin?
 * @apiParamExample {json} Input
 *    {
 *      "login": "Admin",
 *      "password":"Admin",
 *      "admin":true
 *    }
 * @apiSuccess {Object[]} User
 * @apiSuccess {Number} User.id User id
 * @apiSuccess {String} User.login User login
 * @apiSuccess {String} User.password User password
 * @apiSuccess {Boolean} User.admin User isAmdmin?
 * @apiSuccess {Date} User.updated_at Update's date
 * @apiSuccess {Date} User.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    [{
 *      "id": 1,
 *      "name": "Admin",
 *      "password":"Admin",
 *      "admin":true
 *      "updated_at": "2018-05-14T00:00:00.000Z",
 *      "created_at": "2018-05-14T00:00:00.000Z"
 *    }]
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample
 *    HTTP/1.1 400 Data missing
 */
userRouter.post('/add', function(req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const admin = req.body.admin;
    if( login === undefined || password === undefined || admin === undefined ) {
        res.status(400).json('Data missing').end();
        return;
    }
    UserController.add(login, password, admin)
      .then( (user) => {
          res.status(201).json(user);
      })
      .catch( (err) => {
          console.error(err);
          res.status(500).end();
      });
});


/**
* @api {post} /user/authenticate authenticate User
* @apiGroup user
* @apiParam {String} login User login
* @apiParam {String} password User password
 * @apiParam {Boolean} admin User isAmdmin?
* @apiParamExample {json} Input
*    {
*      "login": "Admin",
*      "password":"Admin",
*      "admin":true
*    }
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*    [{
*      "success" : true
*      "message" : 'Token generated'
*      "token" : 'viygerhiujodzkenrutbvunohiezpjaopoeepcoza'
*    }]
* @apiErrorExample
*    HTTP/1.1 500 Internal Server Error
* @apiErrorExample
*    HTTP/1.1 400 Authentication failed. User not found
* @apiErrorExample
*    HTTP/1.1 400 Authenfication failed. Wrong password
*/
userRouter.post('/authenticate', function(req, res) {
    UserController.exist(req.body.login)
      .then( (user) => {
        if(!user) {
            res.status(400).json({
                success: false,
                message: 'Authentication failed. User not found' });
            } else if(user) {
                if( !UserController.verifyPassword(req.body.password, user.password)) {
                    res.status(400).json({
                        success: false,
                        message: 'Authenfication failed. Wrong password'
                    });
                } else {
                  const payload = {
                      admin : user.admin
                  };
                  console.log(config);
                  var token = jwt.sign(payload, config.secret);
                  res.status(200).json({
                      success: true,
                      message: 'Token generated',
                      token: token
                  });
                }
              }

        })
});

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
