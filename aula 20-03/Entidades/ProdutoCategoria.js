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
    },
    outrasColunas: {
        type: DataTypes.STRING, // Defina o tipo adequado para suas colunas adicionais
        allowNull: true
    }
});

module.exports = ProdutoCategoria;