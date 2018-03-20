const ModelIndex = require('../models');
const Burger = ModelIndex.Burger;
const Op = ModelIndex.sequelize.Op;

const BurgerController = function() { };

BurgerController.add = function(name, price) {
    return Burger.create({
        name: name,
        price: price
    });
};

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

module.exports = BurgerController;
