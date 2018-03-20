const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/burger', require('./burger'));
    app.use('/drink', require('./drink'));
    app.use('/size', require('./size'));
};

module.exports = RouteManager;
