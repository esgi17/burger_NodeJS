const ModelIndex = require('../models');
const Drink = ModelIndex.Drink;
const Op = ModelIndex.sequelize.Op;

const DrinkController = function() { };

/**
*  Creation d'un element en base
**/
DrinkController.add = function(name, price, size_id, urlimg) {
    return Drink.create({
        name: name,
        price: price,
        size_id: size_id,
        urlimg: "images/drink/" + name.replace(' ','_') + ".jpg"
    });
}

/**
*   Récupération du prix
**/
DrinkController.getPrice = function(id){
  return Drink.findById(id);
}

/**
*  Récupération des élements en base
**/
DrinkController.getAll = function(search, size_id) {
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
    if (size_id !== undefined){
      where.id = {
        [Op.eq]: size_id
      };
    }
    options.where = where;
    return Drink.findAll(options);
}

// Export du controller
module.exports = DrinkController;
