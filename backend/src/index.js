// Utilizando as funcionalidades do framework express
const express = require('express');
// Importando o cors para dar permissão a quem vai acessar meu backend
const cors = require('cors');
// Utilizando a funcionalidade errors da biblioteca celebrate 
const { errors } = require('celebrate')
// Importar as rotas adquiridas no routes.js
const routes = require('./routes');
// Adicionando as funcionalidades do framework express para a variável app
const app = express();

// Permitindo o acesso ao meu backend
app.use(cors());
// Atribuindo o tipo json para a variável app
app.use(express.json());
// Habilitando a aplicação a utilizar as rotas criadas no routes.js
app.use(routes);
// Habilitando o uso da funcionalidade errors para não dar Error 500
app.use(errors());
// App ouve a porta 3333
app.listen(3333);