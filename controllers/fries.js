const ModelIndex = require('../models');
const Fries = ModelIndex.Fries;
const Op = ModelIndex.sequelize.Op;

const FriesController = function() { };

FriesController.add = function(name, price, size_id) {
    return Fries.create({
        name: name,
        price: price,
        size_id: size_id
    });
}

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

module.exports = FriesController;
