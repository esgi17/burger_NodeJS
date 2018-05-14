<<<<<<< HEAD
'use strict';
const bcrypt         = require('bcrypt');
const bcrypt_p           = require('bcrypt-promise');
const jwt              = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id : {
=======
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
>>>>>>> db0b4cbb55a73ec10931489fa95431c16f6dec5d
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
<<<<<<< HEAD
        firstname : {

        }
    })


    var Model = sequelize.define('User', {
        first     : DataTypes.STRING,
        last      : DataTypes.STRING,
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: {msg: "Phone number invalid."} }},
        phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { msg: "not a valid phone number."} }},
        password  : DataTypes.STRING,
    });

    Model.associate = function(models){
        this.Companies = this.belongsToMany(models.Company, {through: 'UserCompany'});
    };

    Model.beforeSave(async (user, options) => {
        let err;
        if (user.changed('password')){
            let salt, hash
            [err, salt] = await to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);

            [err, hash] = await to(bcrypt.hash(user.password, salt));
            if(err) TE(err.message, true);

            user.password = hash;
        }
    });

    Model.prototype.comparePassword = async function (pw) {
        let err, pass
        if(!this.password) TE('password not set');

        [err, pass] = await to(bcrypt_p.compare(pw, this.password));
        if(err) TE(err);

        if(!pass) TE('invalid password');

        return this;
    }

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};
=======
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    User.associate = _associate;
    return User;
};

// INTERNAL

function _associate(models) {

}
>>>>>>> db0b4cbb55a73ec10931489fa95431c16f6dec5d
