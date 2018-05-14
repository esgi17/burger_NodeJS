const RouteManager = function() { };

/**
* Recuperation des routes
**/
RouteManager.attach = function(app) {
    app.use('/burger', require('./burger'));
    app.use('/drink', require('./drink'));
    app.use('/size', require('./size'));
    app.use('/fries', require('./fries'));
<<<<<<< HEAD
    app.use('/login', require('./login'));
=======
    app.use('/user', require('./user'));

>>>>>>> db0b4cbb55a73ec10931489fa95431c16f6dec5d
};

/**
* Export des routes
**/
module.exports = RouteManager;
