const { DataTypes } = require("sequelize");
const sequelize = require('../Conexao/db');
const Categoria = require('./Categoria');
const Cliente = require('./Cliente')
const ItensPedido = require('./ItensPedido')
const ProdutoCategoria = require('./ProdutoCategoria');
const Produto = sequelize.define('Produto',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey:true
    },
    nome:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    preco:{
        type: DataTypes.DECIMAL (10,2),
        allowNull:false
    },
    disponivel:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true
    }
})



Produto.belongsToMany(Categoria, {
    through: ProdutoCategoria,
    foreignKey: 'produtoId'
});
Categoria.belongsToMany(Produto, {
    through: ProdutoCategoria,
    foreignKey: 'categoriaId'
});

Produto.belongsToMany(Cliente, {
    through: ItensPedido,
    foreignKey: 'produtoId'
});
Cliente.belongsToMany(Produto, {
    through: ItensPedido,
    foreignKey: 'clienteId'
});
module.exports = Produto;


