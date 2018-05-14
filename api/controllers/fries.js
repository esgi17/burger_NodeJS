const ModelIndex = require('../models');
const Fries = ModelIndex.Fries;
const Op = ModelIndex.sequelize.Op;

const FriesController = function() { };

/**
*  Creation d'un element en base
**/
FriesController.add = function(name, price, size_id) {
    return Fries.create({
        name: name,
        price: price,
        size_id: size_id
    });
}

/**
*  Récupération des élements en base
**/
FriesController.getAll = function(search) {
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
    return Fries.findAll(options);
}

// Export du controller
module.exports = FriesController;
