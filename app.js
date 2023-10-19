const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Controller
const calculatorController = require('./controllers/calculatorController');

// Configurando EJS e pasta pública
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/', calculatorController);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
