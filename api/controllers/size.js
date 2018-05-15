const ModelIndex = require('../models');
const Size = ModelIndex.Size;
const Op = ModelIndex.sequelize.Op;

const SizeController = function() { };

/**
*  Creation d'un element en base
**/
SizeController.add = function(name, price_add) {
    return Size.create({
        name: name,
        price_add: price_add
    });
};

/**
*  Récupération des élements en base
**/
SizeController.getAll = function(search) {
    const options = {};
    const where = {};

    if( search !== undefined ) {
        where.name = {
            [Op.like]:`${search}%`
        };
    }
    options.where = where;
    return Size.findAll(options);
}

/**
*   Suppression d'un élément par id
**/
SizeController.del = function(search){
  const options = {};
  const where = {};
  if (search !== undefined){
    where.id = {
      [Op.eq]: search
    };
  }
  options.where = where;
  return Size.destroy(options);
}

SizeController.find = function(id){
  return Size.findById(id);
}


// Export du controller
module.exports = SizeController;
