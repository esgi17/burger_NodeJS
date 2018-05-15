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

/**
*   Suppression d'un élément par id
**/
DrinkController.del = function(search){
  const options = {};
  const where = {};
  if (search !== undefined){
    where.id = {
      [Op.eq]: search
    };
  }
  options.where = where;
  return Drink.destroy(options);
}


/**
*   Récupération
**/
DrinkController.find = function(id){
  return Drink.findById(id);
}


// Export du controller
module.exports = DrinkController;
