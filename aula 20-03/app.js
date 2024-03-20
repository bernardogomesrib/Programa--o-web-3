const Sequelize = require('./Conexao/db');
const Produto = require('./Entidades/Produto');
const Cliente = require('./Entidades/Cliente')

Sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
}).catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err.message);
});