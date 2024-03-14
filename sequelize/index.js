const express = require('express');
const app = express();
//para usar o router com json nas rotas é necessário usar app.use(json()) antes das rotas, da merda não carregar antes
app.use(express.json());

//iniciando o banco de dados
const db = require('./Banco/db');

//iniciando as rotas que eu criei
const router = require('./Rotas/Rotas')
//caso não use o app.use(router) que foi o nome da constante que segura as rotas que escolhi
//não vai ter rotas no projeto ...
app.use(router);

//esse comando de fato inicia o banco de dados, depois de iniciar o banco de dados ele chama a função para iniciar o app
//na porta 3000
db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
});