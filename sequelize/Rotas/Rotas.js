const express = require('express');
const router = express.Router();
const pessoaController = require('./pessoaController');

// Rota para atualizar uma pessoa existente
router.put('/pessoas/:id', pessoaController.atualizarPessoa);

// rota para pegar pessoas
router.get('/pessoa/',pessoaController.getPessoa);



module.exports = router;