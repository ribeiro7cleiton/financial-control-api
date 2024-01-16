const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/controle_financeiro', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Configurar o middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas principais
app.use('/', routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
