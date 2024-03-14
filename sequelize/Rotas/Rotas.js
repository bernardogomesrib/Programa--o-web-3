const express = require('express');
const router = express.Router();
const pessoaController = require('../Controlador/pessoaController');


// Rota para atualizar uma pessoa existente
router.put('/pessoas/:id', pessoaController.atualizarPessoa);

// rota para pegar pessoas
router.get('/pessoas/',pessoaController.getPessoa);

// rota para postar pessoa
router.post('/pessoas/',pessoaController.inserirPessoa);

// Rota para deletar uma pessoa específica
router.delete('/pessoas/:id', pessoaController.deletarPessoa);

module.exports = router;