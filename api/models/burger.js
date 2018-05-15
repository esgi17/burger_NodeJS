module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        urlimg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    return Burger;
};

// INTERNAL

function _associate(models) {
  // Drink possède une taille
  models.Burger.hasMany(models.Meal, {
    as: 'meal'
  });
}
