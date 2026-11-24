
const express = require('express');

const app = express();

const PORTA = 3366;

// Permitir receber dados em JSON
app.use(express.json());

// Importar as rotas
const produtoRoutes = require('./routes/produtoRoutes');

// Usar as rotas
app.use('/', produtoRoutes);

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
