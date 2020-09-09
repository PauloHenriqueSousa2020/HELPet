//Reponsável pela criação de um usuário
// Conexão com o banco de dados
const connection = require('../database/connection');
// Pacote existente no node para cryptografia
const crypto = require('crypto');
const mail = require('../extras/sendMail');

module.exports = {
    // Criar novo usuário
    async create(request, response) {
        const { name, senha, email, whatsapp, cidade, endereco } = request.body;
        // gerando um id aleatório
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('users').insert({
            id,
            name,
            senha,
            email,
            whatsapp,
            cidade,
            endereco,
        })
        const destinatario = `${email}`  //'E-MAIL DE QUEM VAI RECEBER';
        mail.enviarEmail(destinatario);
        return response.json({ id });
    },
    
    // Listar todos os usuários
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    // Deletar um usuário (developed)
    async delete(request, response) {
        const { id } = request.params;
        const usersheader_id = request.headers.authorization;

        const users = await connection('users')
            .where('id', id)
            .first();

        if (users.id != usersheader_id) {
            return response.status(401).json({ error: 'Operação não autorizada!' });
        }

        await connection('users').where('id', id).delete();

        return response.status(204).send();
    }
}