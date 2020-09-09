// Reponsável por um único perfil
// Conexão com o banco de dados
const connection = require('../database/connection');
module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;
        const donors = await connection('donors')
            .where('users_id', user_id)
            .select('*');
        return response.json(donors);
    }
}


