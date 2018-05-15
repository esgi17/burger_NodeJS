const ModelIndex = require('../models');
const Meal = ModelIndex.Meal;
const Op = ModelIndex.sequelize.Op;


const MealController = function() { };

/**
*  Creation d'un element en base
**/
MealController.add = function(name, discount, burger_id, drink_id, fries_id, price) {
    return Meal.create({
        name: name,
        discount: discount,
        burger_id: burger_id,
        drink_id: drink_id,
        fries_id: fries_id,
        price : price
    });
};


/**
*  Récupération des élements en base
**/
MealController.getAll = function (search) {
    const options = {
      include: [{
        model: ModelIndex.Drink,
        as : 'drink'
      },
      {
        model: ModelIndex.Burger,
        as : 'burger'
      },
      {
        model: ModelIndex.Fries,
        as : 'fries'
      }]
    };
    const where = {};
    if( search !== undefined ) {
        where.name = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;
    return Meal.findAll(options);
};

// Export du controller
module.exports = MealController;
