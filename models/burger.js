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
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
  //  Burger.associate = _associate;
    return Burger;
};

// INTERNAL

function _associate(models) {
  /*models.Project.hasMany(models.Task, {
    as: 'tasks'
  });*/
}
