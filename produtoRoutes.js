
const express = require('express');
const router = express.Router();

const produtoController = require('../controller/produtoController');

// Rota para listar produtos
router.get('/produtos', produtoController.listar);

// Rota para buscar produto pelo id
router.get('/produtos/:id', produtoController.buscarPorId);

// Rota para cadastrar produto
router.post('/produtos', produtoController.cadastrar);

module.exports = router;
