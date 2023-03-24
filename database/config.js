const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: '1914',
  database: 'CafeDB',
  port: '5432',
  logging: false,
});

module.exports = { db };
