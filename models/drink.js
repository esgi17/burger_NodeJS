module.exports = function (sequelize, DataTypes) {
    const Drink = sequelize.define('Drink', {
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
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Drink.associate = _associate;
    return Drink;
};

// INTERNAL

function _associate(models) {
  /*models.Project.hasMany(models.Task, {
    as: 'tasks'
  });*/
  models.Drink.belongsTo(models.Size, {
    as : 'size'
  });
}
