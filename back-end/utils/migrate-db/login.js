exports.up = async knex => {
  const exist = await knex.schema.hasTable("login");

  if (!exist) {
    await knex.schema.createTable("login", table => {
      table.string("id").notNull();
      table.string("email", 50).notNull();
      table.string("password", 100).notNull();
    });
  }
};

exports.down = async knex => {
  const exist = await knex.schema.hasTable("login");

  if (exist) {
    await knex.schema.dropTable("login");
  }
};
