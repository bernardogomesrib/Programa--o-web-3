
const Sequelize = require('sequelize');
const sequelize = require('../Banco/db');
//definindo como será a tabela no banco de dados para pessoa
const Pessoa = sequelize.define('pessoa', {
    //um id, big int, autoincrementavel, chave primaria
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    //nome,string,não pode ser nulo, tamanho padrão da forma que está é 255 caracteres
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //tamanho flutuante, padrão não me lembro mas acho que seja 10,2
    altura: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});
//comando para identificar que isto é um modulo e deve ser exportado como Pessoa
module.exports = Pessoa;