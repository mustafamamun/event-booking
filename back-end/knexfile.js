require("dotenv").config();

const connConfig = {
  host: process.env.DB_USER || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || process.env.DB_PASS || "mustafa",
  database: process.env.DB_NAME || "eventbooking",
  port: process.env.DB_PORT || "5432"
};

module.exports = {
  client: "pg",
  connection: connConfig,
  pool: {
    min: 2,
    max: 3
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./utils/migrate-db"
  }
  // seeds: {
  //   directory: "./utils/seeds"
  // }
};
