const { Sequelize,DataTypes } = require("sequelize");
const sequelize = require('../Conexao/db')
const Categoria = sequelize.define('Categoria',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull:true
    }
})

module.exports = Categoria;