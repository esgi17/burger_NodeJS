const ModelIndex = require('../models');
const Size = ModelIndex.Size;
const Op = ModelIndex.sequelize.Op;

const SizeController = function() { };

SizeController.add = function(libelle, price_add) {
    return Size.create({
        libelle: libelle,
        price_add: price_add
    });
};

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

module.exports = SizeController;
