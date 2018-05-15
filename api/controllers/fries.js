const ModelIndex = require('../models');
const Fries = ModelIndex.Fries;
const Op = ModelIndex.sequelize.Op;

const FriesController = function() { };

/**
*  Creation d'un element en base
**/
FriesController.add = function(name, price, size_id, urlimg) {
    return Fries.create({
        name: name,
        price: price,
        size_id: size_id,
        urlimg: "images/fries/" + name.replace(' ','_') + ".jpg"
    });
}

/**
*  Récupération des élements en base
**/
FriesController.getAll = function(search, size_id) {
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
    return Fries.findAll(options);
}

/**
*   Suppression d'un élément par id
**/
FriesController.del = function(search){
  const options = {};
  const where = {};
  if (search !== undefined){
    where.id = {
      [Op.eq]: search
    };
  }
  options.where = where;
  return Fries.destroy(options);
}



/**
*   Récupération
**/
FriesController.find = function(id){
  return Fries.findById(id);
}


// Export du controller
module.exports = FriesController;
