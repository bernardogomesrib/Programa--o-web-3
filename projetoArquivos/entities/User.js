const sequelize = require('../db/db');
const { DataTypes } = require("sequelize");
const User = sequelize.define('user',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey:true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: true
    },
    ultimoIp:{
        type: DataTypes.STRING(135),
        allowNull: false
    }
    
})
module.exports = User;