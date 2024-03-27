const Sequelize = require('./db/db');
const Board = require('./entities/Board');


Sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
}).catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err.message);
});
