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

// Export du controller
module.exports = CategoryController;
