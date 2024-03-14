// produto.js
const Sequelize = require('sequelize');
const sequelize = require('../Banco/db');

const Produto = sequelize.define('pessoa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Pessoa;