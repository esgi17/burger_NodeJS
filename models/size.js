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
  //  Burger.associate = _associate;
    return Size;
};

// INTERNAL

function _associate(models) {
  models.Size.hasMany(models.Drink, {
    as: 'drinks'
  });
  models.Size.hasMany(models.Fries, {
    as: 'fries'
  });
}
