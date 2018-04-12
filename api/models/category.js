module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
  //  Burger.associate = _associate;
    return Category;
};

// INTERNAL

function _associate(models) {
  // Associations
}
