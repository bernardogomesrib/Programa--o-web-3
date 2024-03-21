const { DataTypes } = require("sequelize");
const sequelize = require('../Conexao/db')

const ProdutoCategoria = sequelize.define('ProdutoCategoria', {

    produtoId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    categoriaId: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

module.exports = ProdutoCategoria;