const Sequelize = require('sequelize');
//definindo o banco de dados     banco --- usuario --- senha
const sequelize = new Sequelize('sequelize', 'root', 'senha1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;