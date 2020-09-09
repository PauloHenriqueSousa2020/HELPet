// Utilizando as funcionalidades do framework express
const express = require('express'); 

// Adicionando à variável routes as funcionalidades de rotas do express
const routes = express.Router();

// UserController responsável por criar um novo usuário, DonorsController responsável por criar, listar e excluir todos os casos
// ProfileController responsável por  listar  casos de um único usuário, SessionController responsável por Login
const UserController = require('./controllers/UserController');
const DonorsController = require('./controllers/DonorsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Criando rota para login
routes.post('/sessions', SessionController.create);

// Criar rota para listar todos os usuários do banco de dados, rota para novo usuário, rota para deletar usuário
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

// Listar dados de um único usuário
routes.get('/profile', ProfileController.index);

// Criar rota para listar todos os casos de um usuário, rota para criar um novo caso, rota para deletar caso do banco de dados
routes.get('/donors', DonorsController.index);
routes.post('/donors', DonorsController.create);
routes.delete('/donors/:id', DonorsController.delete);

// Exportando as rotas para serem utilizadas nos outros arquivos
module.exports = routes;
