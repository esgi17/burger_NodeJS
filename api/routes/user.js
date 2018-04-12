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

module.exports = userRouter;
