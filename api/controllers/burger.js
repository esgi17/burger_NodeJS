const ModelIndex = require('../models');
const Burger = ModelIndex.Burger;
const Op = ModelIndex.sequelize.Op;

const BurgerController = function() { };

/**
*  Creation d'un element en base
**/
BurgerController.add = function(name, price, urlimg) {

    return Burger.create({
        name: name,
        price: price,
        urlimg: "images/burger/" + name.replace(' ','_') + ".jpg"
    });
};

/**
*   Récupération
**/
BurgerController.find = function(id){
  return Burger.findById(id);
}
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

/**
*   Suppression d'un élément par id
**/
BurgerController.del = function(search){
  const options = {};
  const where = {};
  if (search !== undefined){
    where.id = {
      [Op.eq]: search
    };
  }
  options.where = where;
  return Burger.destroy(options);
}


// Export du controller
module.exports = BurgerController;
