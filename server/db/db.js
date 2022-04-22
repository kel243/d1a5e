const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
    process.env.DATABASE_URL || "messenger",
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: "localhost",
        port: "5433",
        logging: false,
        dialect: "postgres",
    }
);

module.exports = db;
