const ModelIndex = require('../models');
const Burger = ModelIndex.Burger;
const Op = ModelIndex.sequelize.Op;

const BurgerController = function() { };

/**
*  Creation d'un element en base
**/
BurgerController.add = function(name, price) {
    return Burger.create({
        name: name,
        price: price
    });
};

/**
*  Récupération des élements en base
**/
BurgerController.getAll = function (search) {
    const options = {};
    const where = {};

    if( search !== undefined ) {
        where.name = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;
    return Burger.findAll(options);
};

// Export du controller
module.exports = BurgerController;
