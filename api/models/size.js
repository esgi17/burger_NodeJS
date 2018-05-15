module.exports = function (sequelize, DataTypes) {
    const Size = sequelize.define('Size', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price_add: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    return Size;
};

// INTERNAL

function _associate(models) {
  // Drink possède une taille
  models.Size.hasMany(models.Drink, {
    as: 'drinks'
  });
  // Fries possède une taille
  models.Size.hasMany(models.Fries, {
    as: 'fries'
  });
}
