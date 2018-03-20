const RouteManager = function() { };

RouteManager.attach = function(app) {
  app.use('/burger', require('./burger'));
};

module.exports = RouteManager;
