const RouteManager = function() { };

/**
* Recuperation des routes
**/
RouteManager.attach = function(app) {
    app.use('/burger', require('./burger'));
    app.use('/drink', require('./drink'));
    app.use('/size', require('./size'));
    app.use('/fries', require('./fries'));
    app.use('/user', require('./user'));
    app.use('/category', require('./category'));
    app.use('/meal', require('./meal'));
};

/**
* Export des routes
**/
module.exports = RouteManager;
