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
  app.use( function(req,res,next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

  RouteManager.attach(app);
  app.listen(8000, function() {
    console.log('Server started on 8000...');
  });
}
