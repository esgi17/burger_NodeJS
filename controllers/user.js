const ModelIndex = require('../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
let config = require('../config');
const User = ModelIndex.User;
const Op = ModelIndex.sequelize.Op;
const UserController = function() { };

UserController.add = function(login, password, admin) {
    return User.create({
        login: login,
        password: passwordHash.generate(password),
        admin: admin
    });
}

UserController.exist = function(login) {
    return User.findOne({
        where : {
            login: login
        }
    })
}

UserController.verifyPassword = function (pwd, pwd1) {
    if( passwordHash.verify(pwd, pwd1) ) {
        return true;
    }
    return false;
}

UserController.checkToken = function (token) {
  if (token) {
      try {
          var decoded = jwt.verify(token, config.secret);
          return true;
      } catch (err) {
          console.error(err);
          return false;
      }
  } else {
      return false;
  }
}

// Export du controller
module.exports = UserController;
