//Responsável por login

// Conexão com o banco de dados
const connection = require('../database/connection');
module.exports = {
    async create(request, response){
        const { email, senha } = request.body;
        const users = await connection('users')
            .where('email', email)
            .where('senha', senha)
            .select('name')
            .select('id')
            .first();
        if(!users){ 
            return response.status(400).json({  error: 'Nenhum usuário encontrado com esse email e senha' });
        }
        return response.json(users);
    }
}

