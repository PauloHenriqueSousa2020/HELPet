exports.up = function(knex) {
    // Criar nova tabela
    return knex.schema.createTable('donors', function (table){
        table.increments();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('animal').notNullable();
        table.string('sexo_do_animal').notNullable();
        table.string('tamanho_do_animal').notNullable();
        table.string('idade_do_animal').notNullable();
        table.string('users_id').notNullable();
        table.foreign('users_id').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    // Deletar tabela caso exista erro
    return knex.schema.dropTable('donors')
};





