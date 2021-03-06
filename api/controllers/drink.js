const ModelIndex = require('../models');
const Drink = ModelIndex.Drink;
const Op = ModelIndex.sequelize.Op;

const DrinkController = function() { };

/**
*  Creation d'un element en base
**/
DrinkController.add = function(name, price, size_id) {
    return Drink.create({
        name: name,
        price: price,
        size_id: size_id
    });

}

/**
*  Récupération des élements en base
**/
DrinkController.getAll = function(search) {
    const options = {
      include: [{
        model: ModelIndex.Size,
        as : 'size'
      }]
    };
    const where = {};
    if( search !== undefined ) {
        where.name = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;
    return Drink.findAll(options);
}

// Export du controller
module.exports = DrinkController;
