const { DataTypes } = require("sequelize");
const sequelize = require('../Conexao/db')


const ItensPedido = sequelize.define('ItensPedido', {

    produtoId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    quantidade:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    preco_unitario:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    }
});


module.exports = ItensPedido;