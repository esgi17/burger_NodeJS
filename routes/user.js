const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;

const jwt = require('jsonwebtoken');
const config = require('../config');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.post('/add', function(req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const admin = req.body.admin;
    if( login === undefined || password === undefined || admin === undefined ) {
        res.status(400).end();
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

module.exports = userRouter;
