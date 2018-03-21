const ModelIndex = require('../models');
const Drink = ModelIndex.Drink;
const Op = ModelIndex.sequelize.Op;

const DrinkController = function() { };

DrinkController.add = function(name, price, size_id) {
    return Drink.create({
        name: name,
        price: price,
        size_id: size_id
    });

}

DrinkController.getAll = function(search) {
    const options = {};
    const where = {};

    if( search !== undefined ) {
        where.name = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;

    return Drink.findAll(options)
      .then( (drinks) => {
          for( drink in drinks ) {
              drink.size = ModelIndex.Size.find({
                  where: {
                    id: drink.size_id
                  }
              });
          }
          return drinks;
      });


}

/*
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
*/
module.exports = DrinkController;
