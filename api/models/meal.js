module.exports = function (sequelize, DataTypes) {
    const Meal = sequelize.define('Meal', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Meal.associate = _associate;
    return Meal;
};

// INTERNAL

function _associate(models) {
  models.Meal.belongsTo(models.Burger, {
    as: 'burger'
  });
  models.Meal.belongsTo(models.Drink, {
    as: 'drink'
  });
  models.Meal.belongsTo(models.Fries, {
    as: 'fries'
  });
}
