exports.up = function(knex) {
    // Criar nova tabela
    return knex.schema.createTable('users', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('senha').notNullable();
        table.string('email').notNullable();
        table.number('whatsapp').notNullable();
        table.string('cidade').notNullable();
        table.string('endereco').notNullable();
    })
};

exports.down = function(knex) {
    // Deletar tabela caso exista erro
    return knex.schema.dropTable('users')
};



