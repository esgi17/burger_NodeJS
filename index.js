const express = require('express');
const ModelIndex = require('./models');
const RouteManager = require('./routes');

const jwt = require('jsonwebtoken');
const config = require('./config');
const morgan = require('morgan')
ModelIndex
  .openDatabase()
  .then(_startServer)
  .catch((err) => {
      console.error(err);
  });

// INTERNAL

function _startServer() {

  const app = express();
  app.set('secret', config.secret);
  app.use(morgan('dev'));

  RouteManager.attach(app);
  app.listen(3000, function() {
    console.log('Server started on 9999...');
  });
}
