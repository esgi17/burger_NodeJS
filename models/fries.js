module.exports = function (sequelize, DataTypes) {
    const Fries = sequelize.define('Fries', {
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
    Fries.associate = _associate;
    return Fries;
};

// INTERNAL

function _associate(models) {
  // Frites possède une taille
  models.Fries.belongsTo(models.Size, {
    as : 'size'
  });
}
