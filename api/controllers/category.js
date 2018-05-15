const ModelIndex = require('../models');
const Category = ModelIndex.Category;
const Op = ModelIndex.sequelize.Op;

const CategoryController = function() { };

/**
*  Récupération des élements en base
**/
CategoryController.getAll = function () {
    return Category.findAll();
};


/**
*   Suppression d'un élément par id
**/
CategoryController.del = function(search){
  const options = {};
  const where = {};
  if (search !== undefined){
    where.id = {
      [Op.eq]: search
    };
  }
  options.where = where;
  return Category.destroy(options);
}

CategoryController.find = function(id){
  return Category.findById(id);
}

// Export du controller
module.exports = CategoryController;
