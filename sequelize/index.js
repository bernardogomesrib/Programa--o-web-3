const express = require('express');
const app = express();
app.use(express.json());
const db = require('./Banco/db');
const router = require('./Rotas/Rotas')
app.use(router);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});