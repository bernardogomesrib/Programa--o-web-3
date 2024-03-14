//o rotas usa o express pois dentro do express que tem o gerenciador de rotas
const express = require('express');
//v - esse é o gerenciador de rotas -v
const router = express.Router();
//importando o controlador que está com as funções de controle do banco de dados
const pessoaController = require('../Controlador/pessoaController');


// Rota para atualizar uma pessoa existente
router.put('/pessoas/:id', pessoaController.atualizarPessoa);

// rota para pegar pessoas
router.get('/pessoas/',pessoaController.getPessoa);

// rota para postar pessoa
router.post('/pessoas/',pessoaController.inserirPessoa);

// Rota para deletar uma pessoa específica
router.delete('/pessoas/:id', pessoaController.deletarPessoa);


//exportando as rotas que defini acima
module.exports = router;