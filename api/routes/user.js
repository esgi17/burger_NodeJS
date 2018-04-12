const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UserController = controllers.UserController;

const jwt = require('jsonwebtoken');
const config = require('../config');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

/*
* Route d'ajout d'un USER => Method : POST
                          => Route : /user/add
*/
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

/*
* Route d'authentification d'un USER => Method : POST
                          => Route : /user/authenticate
*/
userRouter.post('/authenticate', function(req, res) {
    // On recupere le USER associé au login
    UserController.exist(req.body.login)
      .then( (user) => {
        // Si USER inexistant
          if(!user) {
              // Retour d'erreur
              res.status(400).json({
                  success: false,
                  message: 'Authentication failed. User not found' });
          } else if(user) { // Si USER existe
              // On vérifie le mot de passe associé
              if( !UserController.verifyPassword(req.body.password, user.password)) {
                  // Si pwd incorrect, retour erreur
                  res.status(400).json({
                      success: false,
                      message: 'Authenfication failed. Wrong password'
                  });
              } else {
                // Sinon on crée le token et on le retourne
                const payload = {
                    admin : user.admin
                };
                var token = jwt.sign(payload, config.secret);
                res.status(200).json({
                    success: true,
                    message: 'Token generated',
                    token: token
                });
              }
            }

        });
});

module.exports = userRouter;
