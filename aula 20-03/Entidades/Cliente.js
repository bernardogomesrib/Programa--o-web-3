const { DataTypes } = require("sequelize");
const sequelize = require("../Conexao/db");

const Clientes = sequelize.define('Clientes',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),allowNull:false,unique:true
    },
    endereco:{
        type:DataTypes.STRING(255),allowNull:false
    },
    telefone:{
        type: DataTypes.STRING(20),allowNull:false
    }
})
module.exports = Clientes;