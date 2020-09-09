//Responsável por todos os casos
// Conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
    // Criação de um novo caso
        async create(request, response) {
            const { titulo, descricao, animal, sexo_do_animal, tamanho_do_animal, idade_do_animal } = request.body;
            const users_id = request.headers.authorization;
    
            const [id] = await connection('donors').insert({
                titulo,
                descricao,
                animal,
                sexo_do_animal,
                tamanho_do_animal,
                idade_do_animal,
                users_id,
            });
       
            return response.json({ id });
        },

    // Listagem de casos por usuários
    async index(request, response) {
            const donors = await connection('donors')      
            .join('users', 'users.id', '=', 'donors.users_id')
            .select([
                'donors.*',
                'users.name', 
                'users.email', 
                'users.whatsapp', 
                'users.cidade', 
                'users.endereco'
            ]);
        return response.json(donors);
    },

    // Deletar um caso
    async delete(request, response){
        const { id } = request.params;
        const users_id = request.headers.authorization;

        const donors = await connection('donors')
            .where('id', id)
            .select('users_id')
            .first();
        
            if(donors.users_id != users_id) {
                return response.status(401).json({ error: 'Operação não autorizada!' });
            }

            await connection('donors').where('id', id).delete();

            return response.status(204).send();
    }



}

