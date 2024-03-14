const express = require('express');
const app = express();
const db = require('./Banco/db');
const produtoController = require('./produtoController');

app.get('/pessoa', produtoController.getPessoa);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});