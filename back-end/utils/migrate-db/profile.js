exports.up = async knex => {
  const exist = await knex.schema.hasTable('profile');

  if (!exist) {
    await knex.schema.createTable('profile', table => {
      table.string('id').notNull();
      table.string('user_id', 50).notNull();
      table.string('first_name', 100).notNull();
      table.string('last_name', 100).nullable();
      table.binary('image').nullable();

      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNull();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();
    });
  }
};

exports.down = async knex => {
  const exist = await knex.schema.hasTable('profile');

  if (exist) {
    await knex.schema.dropTable('profile');
  }
};
